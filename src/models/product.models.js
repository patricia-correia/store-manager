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

/* const modelUpdate = async (name, id) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return result;
}; */

const modelProductsDelete = async (productId) => {
  const result = await connection.execute(
    `DELETE FROM StoreManager.products WHERE id = ${productId}`,
  );
  return result;
};

module.exports = {
  modelProducts,
  modelProductsId,
  modelCreatProduct,
  // modelUpdate,
  modelProductsDelete,
};