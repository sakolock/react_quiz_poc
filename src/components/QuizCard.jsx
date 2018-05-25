import React, { Component } from 'react';
import QuizCardDetail from './QuizCardDetail';
import QuestionOption from './QuestionOption';

class QuizCard extends Component {
  props: {
    question: string,
    options: Array,
    handleAnswerClick: Function
    //
  };
  state = {
    detailShowing: false,
    answered: false
  };

  render() {
    console.log(this.props);
    let questionOptionComponent;

    if (this.props.options) {
      questionOptionComponent = this.props.options.map(option => (
        <QuestionOption key={option.id} {...option} handleAnswerClick={this.props.handleAnswerClick} />
      ));
    } else {
      questionOptionComponent = <span>getting option</span>;
    }
    return (
      <section className="quiz-card">
        <p>{this.props.question}</p>
        <ul className="quiz-options">{questionOptionComponent}</ul>
        <QuizCardDetail {...this.props} showing={this.state.detailShowing} />
      </section>
    );
  }
}

export default QuizCard;
