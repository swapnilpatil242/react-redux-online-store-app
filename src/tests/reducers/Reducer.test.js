import reducer from "../../reducers/Reducer";
import {productStoreActionTypes as types } from "../../constants/ActionsType";

const defaultState = { 
  productDetails: null,
  fetchingError: false,
  fetching: false,
}
describe("Reducer", () => {
  test("should return the initial state", () => {
    const action = { type: null };
    expect(reducer(defaultState, action)).toEqual(defaultState);
  });

  test("should handle fetchProductsDetails", () => {
    const resultFetchProducts = {
      fetching: true, 
      fetchingError: false, 
      productDetails: null
    };

    expect(
      reducer(defaultState, {
        type: types.fetchProducts,
        resultFetchProducts,
      })
    ).toEqual(resultFetchProducts);
  });

  it("should handle fetchProductsSuccess", () => {
    const actionvalue = [
      {
        "productDesc": "All type of soaps",
        "productName": "Soaps",
        "productSlug": "soaps"
      },
      {
        "productDesc": "All type of electronics",
        "productName": "Electronics",
        "productSlug": "electronics"
      }
    ]
    const resultFetchProducts = {
      fetching: false,
      fetchingError: false,
      productDetails: [
        {
          "productDesc": "All type of soaps",
          "productName": "Soaps",
          "productSlug": "soaps"
        },
        {
          "productDesc": "All type of electronics",
          "productName": "Electronics",
          "productSlug": "electronics"
        }
      ]
    };

    expect(
      reducer(defaultState, {
        type: types.fetchProductsSuccess,
        actionvalue,
      })
    ).toEqual(resultFetchProducts);
  });

  test("should handle fetchProductsFailure", () => {
    const resultFetchProducts = {
      fetching: false, 
      fetchingError: true, 
      productDetails: null
    };

    expect(
      reducer(defaultState, {
        type: types.fetchProductsFailure,
        resultFetchProducts,
      })
    ).toEqual(resultFetchProducts);
  });

});
