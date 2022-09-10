function Service() {
  this.getListProduct = function () {
    return axios({
      url: "https://62ff797734344b6431fa3c2c.mockapi.io/api/QLTT",
      method: "GET",
    });
  };

  this.deleteProductApi = function (id) {
    return axios({
      url: `https://62ff797734344b6431fa3c2c.mockapi.io/api/QLTT/${id}`,
      method: "DELETE",
    });
  };

  this.addProductApi = function (product) {
    return axios({
      url: "https://62ff797734344b6431fa3c2c.mockapi.io/api/QLTT",
      method: "POST",
      data: product,
    });
  };

  this.getProductById = function (id) {
    return axios({
      url: `https://62ff797734344b6431fa3c2c.mockapi.io/api/QLTT/${id}`,
      method: "GET",
    });
  };

  this.updateToList = function (product) {
    return axios({
      url: `https://62ff797734344b6431fa3c2c.mockapi.io/api/QLTT/${product.id}`,
      method: "PUT",
      data: product,
    });
  };
}
