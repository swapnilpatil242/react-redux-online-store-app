import request from "superagent";
import API from "../constants/API";

const ProductStoreFetcher = {
  fetch: function () {
    const endPointUrl = `${API.HOST_PATH}${API.PRODUCTS_PATH}`;
    return new Promise(function (resolve, reject) {
      request
        .get(endPointUrl)
        .end((err, res) => {
          return err ? reject(err) : resolve(res);
        });
    });
  },
};

export default ProductStoreFetcher;
