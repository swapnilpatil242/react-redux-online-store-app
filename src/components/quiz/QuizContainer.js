import React from 'react';
import { connect } from 'react-redux';
import QuizStoreAction from '../../actions/QuizStoreAction';
import Quiz from "./Quiz";
import TimerContainer from '../timer/TimerContainer';

// This is the container class file
class QuizContainer extends React.Component {
  render() {
    return (
      <div>
        <TimerContainer />
        <Quiz {...this.props.questions} />
      </div>
    );
  }
}

// 1st params for connecct which state we need from store
const mapStateToProps = state => {
  return {
    currentQuestionKey: state.currentQuestionKey,
  };
};

// 2nd params for connect which action need's to dispatch
const mapDispatchToProps = dispatch => {  
  return {
    actions: {
      fetchProductsDetails: () => {
        dispatch(QuizStoreAction.submitQuestion(questionKey));
      },
    },
  };
};
// connect pass two params
// 1: which part of state need for this component
// 2: which action need's to dispatch
export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
