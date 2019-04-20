import ProductStoreFetcher from "../fetchers/ProductStoreFetcher";
import { productStoreActionTypes } from "../constants/ActionsType";

const fetchProductsDetails = () => {
  return (dispatch) => {
    dispatch({
      type: productStoreActionTypes.fetchProducts,
    });

    return ProductStoreFetcher
      .fetch()
      .then(
        (res) => {
          dispatch(fetchProductsDetailsSuccess(res));
        },
        () => dispatch(fetchProductsDetailsFailure())
      );
  };
};

const fetchProductsDetailsSuccess = (res) => {
  return ({
    type: productStoreActionTypes.fetchProductsSuccess,
    productDetails: res.body,
  });
};

const fetchProductsDetailsFailure = () => {
  return ({
    type: productStoreActionTypes.fetchProductsFailure,
  });
};

export default {
  fetchProductsDetails,
  fetchProductsDetailsSuccess,
  fetchProductsDetailsFailure,
};