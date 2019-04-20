import { productStoreActionTypes } from "../constants/ActionsType";

const initialState = {
  productDetails: null,
  fetchingError: false,
  fetching: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case productStoreActionTypes.fetchProducts:
      return { ...state,
        fetching: true 
      }
    case productStoreActionTypes.fetchProductsSuccess:
      return { ...state,
        productDetails: action.productDetails,
        fetchingError: false,
        fetching: false,
      };
    case productStoreActionTypes.fetchProductsFailure:
      return {
        ...state,
        productDetails: null,
        fetchingError: true,
        fetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
