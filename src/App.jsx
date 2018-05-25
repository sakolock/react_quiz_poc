import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/finances.json';
import axios from 'axios';
import QuizContainer from './components/QuizContainer';
import QuizCard from './components/QuizCard';
console.log(data);
class App extends Component {
  state = {
    questions: []
  };

  componentDidMount() {
    this.setState({
      questions: data.questions
    });
  }

  render() {
    let quizContainerComponent;
    if (this.state.questions.length) {
      quizContainerComponent = <QuizContainer questions={this.state.questions} />;
    } else {
      quizContainerComponent = <p>Loading data!</p>;
    }
    return <div className="App">{quizContainerComponent}</div>;
  }
}

export default App;

//  componentDidMount() {
//     let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
//     let params = {
//       'api-key': '4e300a0ff7f04792b3f715041c46a34b'
//     };
//     axios({
//       url: url,
//       params: params
//     })
//       .then((response: { data: { response: Object } }) => {
//         console.log(response.data.response.docs);
//         this.setState({
//           apiData: {
//             options: response.data.response.docs
//           }
//         });
//         console.log(response);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }
