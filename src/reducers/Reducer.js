import { productStoreActionTypes, questionStoreActionTypes } from "../constants/ActionsType";

const initialState = {
  fetchingError: false,
  fetching: false,
  currentQuestion: null,
  questions: {},
  timer: 60,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case productStoreActionTypes.fetchProducts:
    //   return { ...state, fetching: true };
    // case productStoreActionTypes.fetchProductsSuccess:
    //   return {
    //     ...state,
    //     productDetails: action.productDetails,
    //     fetchingError: false,
    //     fetching: false,
    //   };
    // case productStoreActionTypes.fetchProductsFailure:
    //   return {
    //     ...state,
    //     productDetails: null,
    //     fetchingError: true,
    //     fetching: false,
    //   };
    case questionStoreActionTypes.fetchQuestions:
      return { ...state, fetching: true };
    case questionStoreActionTypes.fetchQuestionsSuccess:
      return {
        ...state,
        questions: action.questionsData,
        fetchingError: false,
        fetching: false,
      };
    case questionStoreActionTypes.fetchQuestionsFailure:
      return {
        ...state,
        questions: {},
        fetchingError: true,
        fetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
