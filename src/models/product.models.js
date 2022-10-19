const connection = require('./connection');

const modelProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const modelProductsId = async (productsId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productsId],
  );
  return result;
};

module.exports = {
  modelProducts,
  modelProductsId,
};