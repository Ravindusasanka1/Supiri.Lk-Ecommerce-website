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

const customerSchema = new mongoose.Schema({
  firebaseUid: { type: String, index: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, default: '' },
  shippingAddress: {
    line1: { type: String, default: '' },
    city: { type: String, default: '' },
    postalCode: { type: String, default: '' },
    country: { type: String, default: 'Sri Lanka' }
  },
  measurements: {
    heightCm: Number,
    chestCm: Number,
    waistCm: Number,
    shoulderCm: Number,
    recommendedSize: String
  }
}, { timestamps: true });

const orderItemSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  name: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, default: 'Standard' },
  qty: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  orderRef: { type: String, unique: true, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  customerEmail: { type: String, required: true, lowercase: true },
  customerName: { type: String, required: true },
  items: [orderItemSchema],
  subtotal: { type: Number, required: true },
  deliveryFee: { type: Number, default: 350 },
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Paid', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  paymentMethod: { type: String, default: 'Stripe' }
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);
const Order = mongoose.model('Order', orderSchema);

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'eer-113-profile-orders' });
});

app.get('/api/profile', async (req, res) => {
  try {
    const email = String(req.query.email || '').trim().toLowerCase();
    if (!email) return res.status(400).json({ error: 'email query parameter is required' });

    let customer = await Customer.findOne({ email });
    if (!customer) {
      customer = await Customer.create({
        name: email.split('@')[0].toUpperCase(),
        email
      });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/profile', async (req, res) => {
  try {
    const { email, name, phone, shippingAddress, measurements, firebaseUid } = req.body;
    if (!email) return res.status(400).json({ error: 'email is required' });

    const normalizedEmail = String(email).trim().toLowerCase();
    const updateFields = {};
    if (name !== undefined) updateFields.name = name;
    if (phone !== undefined) updateFields.phone = phone;
    if (shippingAddress !== undefined) updateFields.shippingAddress = shippingAddress;
    if (measurements !== undefined) updateFields.measurements = measurements;
    if (firebaseUid !== undefined) updateFields.firebaseUid = firebaseUid;

    const customer = await Customer.findOneAndUpdate(
      { email: normalizedEmail },
      { $set: updateFields, $setOnInsert: { email: normalizedEmail } },
      { new: true, upsert: true, runValidators: true }
    );
    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const { customerEmail, customerName, items, subtotal, deliveryFee = 350, totalAmount, paymentMethod = 'Stripe', status = 'Paid' } = req.body;
    if (!customerEmail || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'customerEmail and non-empty items array are required' });
    }

    const normalizedEmail = String(customerEmail).trim().toLowerCase();
    let customer = await Customer.findOne({ email: normalizedEmail });
    if (!customer) {
      customer = await Customer.create({
        name: customerName || normalizedEmail.split('@')[0].toUpperCase(),
        email: normalizedEmail
      });
    }

    const calcSubtotal = subtotal ?? items.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
    const calcTotal = totalAmount ?? (calcSubtotal + Number(deliveryFee));
    const orderRef = `SUP-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    const order = await Order.create({
      orderRef,
      customerId: customer._id,
      customerEmail: normalizedEmail,
      customerName: customerName || customer.name,
      items,
      subtotal: calcSubtotal,
      deliveryFee,
      totalAmount: calcTotal,
      status,
      paymentMethod
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const email = String(req.query.email || '').trim().toLowerCase();
    if (!email) return res.status(400).json({ error: 'email query parameter is required' });

    const orders = await Order.find({ customerEmail: email }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/orders/:idOrRef', async (req, res) => {
  try {
    const { idOrRef } = req.params;
    const query = mongoose.Types.ObjectId.isValid(idOrRef)
      ? { $or: [{ _id: idOrRef }, { orderRef: idOrRef }] }
      : { orderRef: idOrRef };

    const order = await Order.findOne(query);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`EER-113 server running on port ${PORT}`));