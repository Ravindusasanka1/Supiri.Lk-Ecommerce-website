const http = require('http');

function requestJson(method, path, payload) {
  return new Promise((resolve, reject) => {
    const data = payload ? JSON.stringify(payload) : null;
    const req = http.request(
      {
        hostname: '127.0.0.1',
        port: 5001,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {})
        }
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(body) });
          } catch (e) {
            resolve({ status: res.statusCode, body });
          }
        });
      }
    );
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

(async () => {
  try {
    const health = await requestJson('GET', '/health');
    console.log('Health:', health.status, health.body);

    const createdOrder = await requestJson('POST', '/api/orders', {
      customerEmail: 'test.customer@supiri.lk',
      customerName: 'Test Customer',
      items: [{ productId: 1, name: 'Oxford Casual Shirt', size: 'M', color: 'White', qty: 1, price: 4990 }],
      deliveryFee: 350
    });
    console.log('Created Order:', createdOrder.status, createdOrder.body.orderRef);

    const history = await requestJson('GET', '/api/orders?email=test.customer@supiri.lk');
    console.log('Order History Count:', history.status, Array.isArray(history.body) ? history.body.length : 0);
  } catch (err) {
    console.error('Verification failed:', err.message);
  }
})();