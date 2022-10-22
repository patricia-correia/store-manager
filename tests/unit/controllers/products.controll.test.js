const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

//const { allProductsResponse } = require('../../../__tests__/_dataMock');
const productService  = require('../../../src/services/products.services');
const productController = require('../../../src/controllers/products.controller');
const { mockService } = require('../models/mocks/produtcs.model.mock');

chai.use(sinonChai);

describe('teste de unidade de produtos do Controller', function () {
  it('test 1 da camada controller', async function () {
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'serviceProducts').resolves(mockService);
    await productController.allControllers({}, res);

    expect(res.status).to.have.been.calledOnceWith(200);
    expect(res.json).to.have.been.calledOnceWith(mockService.message);
    
  });
});