import React, { Component } from 'react';
import { render } from 'react-dom';

const QuizCardDetail = props => (
  <section className="detail-header" hidden={!props.showing}>
    <p className="url">{props.web_url}</p>
  </section>
);

export default QuizCardDetail;
