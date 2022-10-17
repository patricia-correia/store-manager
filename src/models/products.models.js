const connection = require('./connection');

const modelProducts = async () => {
  const [data] = await connection.execute(
    'SELECT * FROM products',
  );
  return data;
};

const modelProductsId = async (productsId) => {
  const [[data]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productsId],
  );
  return data;
};

module.exports = {
  modelProducts,
  modelProductsId,
};