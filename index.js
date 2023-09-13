const { faker } = require('@faker-js/faker');

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('mi port ' + port);
});

app.get('/', (req, res) => {
  res.send('hola desde express');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 5;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      Image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 2',
    price: '1200',
  });
});

//http://localhost:3000/categories/123/products/321
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

//http://localhost:3000/users?limit=10&&offset=200
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});
