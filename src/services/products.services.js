const { productsModel } = require('../models/products.models');
const codeStatus = require('../utils/codeStatus');
const errorMessages = require('../utils/errorMessages');

const serviceProducts = async () => {
  const data = await productsModel.modelProducts();
  return { message: data, status: codeStatus.HTTP_OK_STATUS };
};

const serviceProductsId = async (id) => {
  const data = await productsModel.modelProductsId(id);

  if (data) {
    return { message: data, status: codeStatus.HTTP_OK_STATUS };
  }

  return { message: errorMessages.NOT_FOUND_PRODUCT, status: codeStatus.HTTP_ERROR_STATUS };
};

module.exports = {
  serviceProducts,
  serviceProductsId,
};