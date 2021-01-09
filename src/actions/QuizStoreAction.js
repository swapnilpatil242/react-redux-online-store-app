import QuizStoreFetcher from "../fetchers/QuizStoreFetcher";
import { questionStoreActionTypes } from "../constants/ActionsType";

const fetchQuestions = () => {
  return (dispatch) => {
    dispatch({
      type: questionStoreActionTypes.fetchQuestions,
    });

    return QuizStoreFetcher.fetch().then(
      (res) => {
        dispatch(fetchQuestionsSuccess(res));
      },
      () => dispatch(fetchQuestionsFailure())
    );
  };
};

const fetchQuestionsSuccess = (res) => {
  return {
    type: questionStoreActionTypes.fetchQuestionsSuccess,
    questionsData: res.body,
  };
};

const fetchQuestionsFailure = () => {
  return {
    type: questionStoreActionTypes.fetchQuestionsFailure,
  };
};

const submitQuestion = () => {
  return (dispatch) => {
    dispatch({
      type: questionStoreActionTypes.fetchQuestions,
    });

    return QuizStoreFetcher.fetch().then(
      (res) => {
        dispatch(fetchQuestionsSuccess(res));
      },
      () => dispatch(fetchQuestionsFailure())
    );
  };
};

const submitQuestionSuccess = () => {
  return {
    type: questionStoreActionTypes.submitQuestionSuccess,
  };
};

export default {
  fetchQuestions,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
};
