import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Questions from './components/Questions/Questions';

class App extends Component {
  state = {
    currentQuestion: 0,
    clicked: false,
    answerId: undefined,
    totalScore: 0
  }

  onClickHandler = () => {
    let current = this.state.currentQuestion + 1;
    if ( this.state.currentQuestion === 5 ) {
      alert('Your score is ' + this.state.totalScore);
      current = 0;
    }
    this.setState({ 
      currentQuestion: current,
      clicked: false
    });
  }

  showAnswerHandler = (id, type) => {
    let score = this.state.totalScore
    if (type) {
       score = score + 1;
    }
    this.setState({ 
      clicked: true,
      answerId: id,
      totalScore: score
     });
  }

  render() {
    let question = Questions[this.state.currentQuestion]; 
    return (
      <div className="App">
        <Header />
        <Card 
          id={question.id} 
          question={question.question}
          imgUrl={question.imgUrl}
          answers={question.answers}
          onClick={this.onClickHandler}
          clicked={this.state.clicked}
          showAnswer={this.showAnswerHandler}
          answerId={this.state.answerId}
          style={'answer'} />
      </div>
    );
  }
}

export default App;
