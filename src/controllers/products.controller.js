const productsService = require('../services/products.services');

const allControllers = async (_req, response) => {
  const data = await productsService.serviceProducts();
  response.status(data.status).json(data.message);
};

const allControllersId = async (req, response) => {
  const { id } = req.params;
  const { status, message } = await productsService.serviceProductsId(id);
  if (status !== 200) {
    return response.status(status).json({ message });
  }
};

module.exports = {
  allControllers,
  allControllersId,
};