function Service() {
    this.getListProduct = function () {
        return axios({
             url: "https://6309fc1032499100327e990a.mockapi.io/product",
             method: "GET",
         }); 
     };
}