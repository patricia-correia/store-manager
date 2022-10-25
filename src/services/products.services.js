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

/* const serviceUpdate = async (name, id) => {
  await productModel.modelUpdate(name, id);
  const productUpdate = await productModel.modelProductsId(id);
  return productUpdate;
};
 */
const serviceDelete = async (productId) => {
  const result = await productModel.modelProductsId(productId);
  if (!result) {
    return {
      message: errorMessages.NOT_FOUND_PRODUCT,
      status: codeStatus.HTTP_ERROR_STATUS,
    };
  }
  const [{ affectedRows }] = await productModel.modelProductsDelete(productId);
  if (affectedRows === 1) return { status: codeStatus.HTTP_DELETE_SUCESS_STATUS };
  return { message: 'Product not deleted', status: codeStatus.HTTP_ERROR_STATUS };
};

module.exports = {
  serviceProducts,
  serviceProductsId,
  serviceCreatProduct,
  // serviceUpdate,
  serviceDelete,
};