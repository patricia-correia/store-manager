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

const modelCreatProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [product],
  );
  return insertId;
};

module.exports = {
  modelProducts,
  modelProductsId,
  modelCreatProduct,
};