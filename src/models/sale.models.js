const connection = require('./connection');

const getSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id as saleId, date, product_id as productId, quantity 
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales ON sale_id = id ORDER BY sale_id, product_id`,
  );
  return result;
};

const getSaleById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT date, product_id as productId, quantity FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales ON sale_id = id WHERE sale_id = ?`,
    [saleId],
  );
  return result;
};

module.exports = {
  getSales,
  getSaleById,
};