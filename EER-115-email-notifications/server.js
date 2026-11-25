require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB Atlas connection error:', err));

const restockAlertSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  productName: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, default: 'Standard' },
  channel: { type: String, enum: ['Email', 'SMS', 'WhatsApp'], default: 'Email' },
  contact: { type: String, required: true, trim: true },
  status: { type: String, enum: ['Active', 'Notified', 'Cancelled'], default: 'Active' },
  notifiedAt: Date
}, { timestamps: true });

const emailNotificationSchema = new mongoose.Schema({
  type: { type: String, enum: ['ORDER_UPDATE', 'RESTOCK_ALERT'], required: true },
  recipientEmail: { type: String, required: true, lowercase: true, trim: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  referenceId: String,
  status: { type: String, enum: ['Queued', 'Sent', 'Failed'], default: 'Sent' },
  sentAt: { type: Date, default: Date.now }
}, { timestamps: true });

const RestockAlert = mongoose.model('RestockAlert', restockAlertSchema);
const EmailNotification = mongoose.model('EmailNotification', emailNotificationSchema);

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'eer-115-email-notifications' });
});

app.post('/api/notifications/restock-subscribe', async (req, res) => {
  try {
    const { productId, productName, size, color = 'Standard', channel = 'Email', contact } = req.body;
    if (!productId || !productName || !size || !contact) {
      return res.status(400).json({ error: 'productId, productName, size, and contact are required' });
    }

    const alert = await RestockAlert.create({
      productId: Number(productId),
      productName,
      size,
      color,
      channel,
      contact: String(contact).trim(),
      status: 'Active'
    });

    let notification = null;
    if (channel === 'Email' && String(contact).includes('@')) {
      notification = await EmailNotification.create({
        type: 'RESTOCK_ALERT',
        recipientEmail: String(contact).trim().toLowerCase(),
        subject: `Restock Alert Confirmed: ${productName} (Size ${size}) — Supiri.Lk`,
        message: `Your restock alert is active for ${productName} (${color}, Size ${size}).`,
        referenceId: String(alert._id),
        status: 'Sent'
      });
    }

    res.status(201).json({ alert, notification });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/notifications/restock-alerts', async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.productId) filter.productId = Number(req.query.productId);
    const alerts = await RestockAlert.find(filter).sort({ createdAt: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/notifications/restock-notify', async (req, res) => {
  try {
    const { productId, size } = req.body;
    if (!productId) return res.status(400).json({ error: 'productId is required' });

    const query = { productId: Number(productId), status: 'Active', channel: 'Email' };
    if (size) query.size = size;

    const matchingAlerts = await RestockAlert.find(query);
    const notified = [];

    for (const item of matchingAlerts) {
      const notif = await EmailNotification.create({
        type: 'RESTOCK_ALERT',
        recipientEmail: item.contact.toLowerCase(),
        subject: `Back in Stock: ${item.productName} (Size ${item.size}) — Supiri.Lk`,
        message: `${item.productName} in Size ${item.size} (${item.color}) is now back in stock.`,
        referenceId: String(item._id),
        status: 'Sent'
      });
      item.status = 'Notified';
      item.notifiedAt = new Date();
      await item.save();
      notified.push({ alertId: item._id, notificationId: notif._id, contact: item.contact });
    }

    res.json({ notifiedCount: notified.length, notified });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/notifications/order-update', async (req, res) => {
  try {
    const { customerEmail, customerName, orderRef, status, totalAmount } = req.body;
    if (!customerEmail || !orderRef || !status) {
      return res.status(400).json({ error: 'customerEmail, orderRef, and status are required' });
    }

    const notification = await EmailNotification.create({
      type: 'ORDER_UPDATE',
      recipientEmail: String(customerEmail).trim().toLowerCase(),
      subject: `Order ${orderRef} Status: ${status} — Supiri.Lk`,
      message: `Hi ${customerName || 'Customer'}, your order ${orderRef} is now ${status}.${totalAmount ? ` Total: Rs. ${Number(totalAmount).toLocaleString()}.` : ''}`,
      referenceId: orderRef,
      status: 'Sent'
    });

    res.status(201).json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/notifications/emails', async (req, res) => {
  try {
    const filter = {};
    if (req.query.email) {
      filter.recipientEmail = String(req.query.email).trim().toLowerCase();
    }
    const list = await EmailNotification.find(filter).sort({ createdAt: -1 }).limit(100);
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`EER-115 server running on port ${PORT}`));