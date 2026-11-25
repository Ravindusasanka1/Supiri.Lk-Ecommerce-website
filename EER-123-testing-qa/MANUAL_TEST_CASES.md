# EER-123: Manual Test Cases — Supiri.Lk

| TC ID | Jira Key | Test Case | Steps | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| TC-01 | EER-113 | Get & update customer profile | 1. Call `GET /api/profile?email=...`<br>2. Call `PUT /api/profile` with name, phone, address | Customer profile saved and returned from MongoDB Atlas |
| TC-02 | EER-113 | Create & fetch past orders | 1. Call `POST /api/orders` with customer & items<br>2. Call `GET /api/orders?email=...` | Order created in MongoDB and listed in past orders |
| TC-03 | EER-115 | Restock alert subscription | 1. Call `POST /api/notifications/restock-subscribe`<br>2. Call `GET /api/notifications/restock-alerts` | Subscription saved with status `Active` |
| TC-04 | EER-115 | Order & restock email notification record | 1. Call `POST /api/notifications/order-update` or `/restock-notify`<br>2. Call `GET /api/notifications/emails` | Notification record stored in MongoDB |
| TC-05 | EER-123 | Storefront & admin UI checks | 1. Open storefront & admin pages<br>2. Test cart, size options, and modals | UI renders cleanly without errors |