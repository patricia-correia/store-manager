const { productModel } = require('../models');
const codeStatus = require('../utils/codeStatus');
const errorMessages = require('../utils/errorMessages');

const serviceProducts = async () => {
  const result = await productModel.modelProducts();
  return { message: result, status: codeStatus.HTTP_OK_STATUS };
};

const serviceProductsId = async (id) => {
  const result = await productModel.modelProductsId(id);

  if (result) {
    return { message: result, status: codeStatus.HTTP_OK_STATUS };
  }

  return { message: errorMessages.NOT_FOUND_PRODUCT, status: codeStatus.HTTP_ERROR_STATUS };
};

const serviceCreatProduct = async (product) => {
  const result = await productModel.modelCreatProduct(product.name);
  return { message: result, status: codeStatus.HTTP_CREATED_RIGHT_STATUS };
};

module.exports = {
  serviceProducts,
  serviceProductsId,
  serviceCreatProduct,
};