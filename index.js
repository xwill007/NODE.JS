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
  res.json([
    {
      name: 'Producto 0',
      price: '1200',
    },
    {
      name: 'Producto 1',
      price: '2200',
    },
  ]);
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
