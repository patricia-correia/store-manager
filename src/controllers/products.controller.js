const productService = require('../services/products.services');

const allControllers = async (_req, response) => {
  const result = await productService.serviceProducts();
  response.status(result.status).json(result.message);
};

const allControllersId = async (req, response) => {
  const { id } = req.params;
  const { status, message } = await productService.serviceProductsId(id);
  if (status !== 200) {
    return response.status(status).json({ message });
  }
  response.status(status).json(message);
};

const crieatControlerProdutc = async (req, response) => {
  const product = req.body;
  const { status, message } = await productService.serviceCreatProduct(product);
  const search = { id: message, name: product.name };
  response.status(status).json(search);
};

module.exports = {
  allControllers,
  allControllersId,
  crieatControlerProdutc,
};