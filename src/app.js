const express = require('express');
const productsController = require('./controllers/products.controller');
const validationProduct = require('./middlewares/product.validation');
const saleController = require('./controllers/sale.controller');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.post('/products', validationProduct, productsController.crieatControlerProdutc);

app.get('/products', productsController.allControllers);

app.get('/products/:id', productsController.allControllersId);

app.get('/sales', saleController.controllerGetSales);

app.get('/sales/:id', saleController.controllerGetSaleById);

// app.put('/products/:id', productsController.updateController);

app.delete('/products/:id', productsController.deleteProductController);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;