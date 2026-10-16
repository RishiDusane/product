const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

let products = [];

app.get('/api/products', (req, res) => {
res.sendFile(path.join(__dirname, 'VIEW', 'products.html'));
});

app.post('/api/products', (req, res) => {
const product = req.body;


products.push(product);

console.log('Product added:', product);

res.status(201).json({
    message: 'Product added successfully',
    product: product
});


});

app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});
