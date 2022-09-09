function Service() {
  this.getListProduct = function () {
    return axios({
      url: "https://62ff797734344b6431fa3c2c.mockapi.io/api/phone",
      method: "GET",
    });
  };

  this.deleteProductApi = function (id) {
    return axios({
      url: `https://62ff797734344b6431fa3c2c.mockapi.io/api/phone${id}`,
      method: "DELETE",
    });
  };

  this.addProductApi = function (product) {
    return axios({
      url: "https://62ff797734344b6431fa3c2c.mockapi.io/api/phone",
      method: "POST",
      data: product,
    });
  };

  this.getProductById = function (id) {
    return axios({
      url: `https://62ff797734344b6431fa3c2c.mockapi.io/api/phone/${id}`,
      method: "GET",
    });
  };

  this.updateProductApi = function (product) {
    return axios({
      url: `https://62ff797734344b6431fa3c2c.mockapi.io/api/phone/${product.id}`,
      method: "PUT",
      data: product,
    });
  };
}
