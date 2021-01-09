import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import QuizStoreAction from "../../actions/QuizStoreAction";

class Home extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchQuestionsDetails();
  }

  render() {
    return (
      <div>
        <ul>
          Guide and Rules ::
          <li>You have 5 minutes to complete Quiz</li>
          <li>You have to select option</li>
          <li>After time ended, Quiz will be auto submitted</li>
        </ul>
        <Link to="/quiz">
          <Button variant="primary">Start Quiz</Button>
        </Link>
      </div>
    );
  }
}

// 1st params for connecct which state we need from store
const mapStateToProps = (state) => {
  return {
    questions: state.questionData,
  };
};

// 2nd params for connect which action need's to dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      fetchQuestionsDetails: () => {
        dispatch(QuizStoreAction.fetchQuestions());
      },
    },
  };
};
// connect pass two params
// 1: which part of state need for this component
// 2: which action need's to dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Home);
