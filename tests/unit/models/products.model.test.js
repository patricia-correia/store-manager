const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');

const { productsDb } = require('./mocks/produtcs.model.mock');

describe('Teste de unidade de produtos', function () {
  
  beforeEach(() => {
    sinon.stub(connection, 'execute').resolves([productsDb]);
  })


  it('test 1 da camada model', async function () {

    const result = await productModel.modelProducts();

    expect(result).to.be.a('array');
    expect(result).to.be.deep.equal(productsDb);
  });

  afterEach(() => {
    sinon.restore();
  })
});