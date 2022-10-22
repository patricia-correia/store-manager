
const productsDb = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  }
  
]

const mockService = {
  status: 200,
  message: productsDb,
}

module.exports = {
  productsDb,
  mockService,
}
