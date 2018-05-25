import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import QuizCard from './QuizCard';
import Chart from './Chart';

class QuizContainer extends Component {
  props: {
    questions: Array
  };
  state = {
    totalAnswered: 0,
    totalCorrect: 0,
    currentQuestion: this.props.questions[0]
  };

  handleAnswerClick = (event: SyntheticEvent<HTMLButtonElement>, correct) => {
    this.setState(prevState => {
      console.log(correct);
      let totalCorrect = prevState.totalCorrect;
      let newQuestion = this.props.questions[prevState.currentQuestion.id];

      if (correct) {
        totalCorrect += 1;
      }

      return {
        totalAnswered: prevState.totalAnswered + 1,
        totalCorrect: totalCorrect,
        currentQuestion: newQuestion || false
      };
    });
  };

  render() {
    console.log(this.props);
    let currentQuestionComponent;
    let scoreboardComponent;

    if (this.state.currentQuestion) {
      currentQuestionComponent = (
        <QuizCard
          key={this.state.currentQuestion.id}
          handleAnswerClick={this.handleAnswerClick}
          {...this.state.currentQuestion}
        />
      );
      scoreboardComponent = (
        <Scoreboard totalAnswered={this.state.totalAnswered} totalCorrect={this.state.totalCorrect} />
      );
    } else {
      let resultHeadline =
        this.state.totalCorrect >= 2
          ? 'You know your stuff!'
          : 'It looks like you could keep better track of your finances';
      currentQuestionComponent = (
        <Chart
          totalCorrect={this.state.totalCorrect}
          totalAnswered={this.state.totalAnswered}
          resultHeadline={resultHeadline}
        />
      );
      scoreboardComponent = '';
    }

    return (
      <article>
        <header className="quiz-header">
          <h1 className="quiz-header-title">How Well do You Know Your Finances?</h1>
        </header>
        <section className="quiz-body">
          {scoreboardComponent}
          {currentQuestionComponent}
          {/* {this.props.options.map(option => <QuizCard key={option._id} {...option} />)} */}
        </section>
      </article>
    );
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   let node = document.getElementById('root');
//   let options = node.getAttribute('data-react-qo');

//   render(<QuizContainer options={options} />, node);
// });

export default QuizContainer;
