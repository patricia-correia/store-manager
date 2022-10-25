const saleService = require('../services/sale.services');

const controllerGetSales = async (_req, res) => {
  try {
    const result = await saleService.serviceGetSales();
    res.status(result.status).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'error' });
  }
};

const controllerGetSaleById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await saleService.serviceSaleById(id);
  if (status !== 200) return res.status(status).json({ message });
    return res.status(status).json(message);
};

module.exports = {
  controllerGetSales,
  controllerGetSaleById,

};