const express = require('express');
const productsController = require('./controllers/products.controller');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.post('/products', productsController.crieatControlerProdutc);

app.get('/products', productsController.allControllers);

app.get('/products/:id', productsController.allControllersId);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;