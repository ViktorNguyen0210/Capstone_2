class CallApi {
  constructor() {
    this.fetchData = function () {
      return axios({
        url: "https://652444deea560a22a4e9ac82.mockapi.io/Data",
        method: "GET",
      });
    };
    this.getProductById = function (id) {
      return axios({
        url: `https://652444deea560a22a4e9ac82.mockapi.io/Data/${id}`,
        method: "GET",
      });
    };

    this.addProduct = function (item) {
      return axios({
        url: "https://652444deea560a22a4e9ac82.mockapi.io/Data",
        method: "POST",
        data: item,
      });
    };
  }
}
