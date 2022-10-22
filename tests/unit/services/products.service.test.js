const { expect } = require('chai');
const sinon = require('sinon');

const productService = require('../../../src/services/products.services');
const productModel = require('../../../src/models');
const { produtsDb } = require('../models/mocks/produtcs.model.mock');

describe('Teste de unidade de produtos do services', function () {
  
  beforeEach(() => {
    sinon.stub(productModel, 'modelProducts').resolves(produtsDb);
  })

  it('test 1 da camada services', async function () {
    const result = await productService.serviceProducts();

    expect(result.message).to.be.deep.eq(produtsDb);
  });

  afterEach(() => {
    sinon.restore();
  })
});