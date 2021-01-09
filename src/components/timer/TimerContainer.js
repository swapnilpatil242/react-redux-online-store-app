import React from 'react';
import { connect } from 'react-redux';

// This is the container class file
class TimerContainer extends React.Component {
  intervalID;
  componentDidMount() {
    this.callTimerCount();
  }

  callTimerCount = () => {
    if (this.props.timer <= 0) {
      this.props.finishQuiz();
    }
    this.props.timerCounting();
    this.intervalID = setTimeout(() => {
      this.callTimerCount();
    }, 1000);
  }

  render() {
    let time = this.props.timer
    let minutes = "0" + Math.floor(time / 60);
    let seconds = "0" + (time - minutes * 60);
    let currentTime =  minutes.substr(-2) + ":" + seconds.substr(-2);
    return (
      <div>
        <p>Remaining Time in MM:SS</p>
        {
          currentTime
        }
      </div>
    );
  }
}

// 1st params for connecct which state we need from store
const mapStateToProps = state => {
  return {
    timer: state.timer,
  };
};

// 2nd params for connect which action need's to dispatch
const mapDispatchToProps = dispatch => {
  return {
    timerCounting: () => {
      dispatch({type: "TIMER_UPDATE"});
    },
    finishQuiz: () => {
      dispatch({ type: "FINISH_QUIZ" });
    },
  };
};
// connect pass two params
// 1: which part of state need for this component
// 2: which action need's to dispatch
export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
