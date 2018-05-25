import React, { Component } from 'react';
import { render } from 'react-dom';

class QuestionOption extends Component {
  props: {
    text: string,
    correct: boolean,
    handleAnswerClick: Function
  };

  state = {
    answered: false
  };

  handleClick = event => {
    event.preventDefault();

    this.setState({ answered: true });
    setTimeout(() => {
      this.props.handleAnswerClick(event, this.props.correct);
    }, 500);
  };

  render() {
    let buttonClass;
    if (this.state.answered) {
      if (this.props.correct) {
        buttonClass = ' option-button-correct';
      } else {
        buttonClass = ' option-button-incorrect';
      }
    }
    return (
      <li>
        <button className={`option-button ${buttonClass}`} onClick={this.handleClick}>
          {this.props.text}
        </button>
      </li>
    );
  }
}

export default QuestionOption;
