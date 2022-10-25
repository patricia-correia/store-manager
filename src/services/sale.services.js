const { saleModel } = require('../models');
const errorMessages = require('../utils/errorMessages');
const codeStatus = require('../utils/codeStatus');

const serviceGetSales = async () => {
  const result = await saleModel.getSales();
  return { message: result, status: codeStatus.HTTP_OK_STATUS };
};

const serviceSaleById = async (id) => {
  const result = await saleModel.getSaleById(id);
  if (result.length > 0) {
    return { message: result, status: codeStatus.HTTP_OK_STATUS };
  }
  return { message: errorMessages.NOT_FOUND_SALE, status: codeStatus.HTTP_ERROR_STATUS };
};

module.exports = {
  serviceGetSales,
  serviceSaleById,
};