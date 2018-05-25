import React from 'react';

const Scoreboard = props => (
  <section className="quiz-scoreboard">
    <h2>Score</h2>
    <dl>
      <dt>Total</dt>
      <dd>
        <span>{props.totalCorrect}</span>
        /
        <span>{props.totalAnswered}</span>
      </dd>
    </dl>
  </section>
);

export default Scoreboard;
