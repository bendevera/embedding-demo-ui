import React from 'react';
import './App.css';
import TextBox from '../TextBox/TextBox';
import Result from '../Result/Result';
import PredictionInfo from '../PredictionInfo/PredictionInfo';
import TrainInfo from '../TrainInfo/TrainInfo';
import DeployInfo from '../DeployInfo/DeployInfo';
import config from '../../config';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: "",
      result: null
    }
    this.setReview = this.setReview.bind(this);
    this.getPrediction = this.getPrediction.bind(this);
  }

  setReview(newReview) {
    this.setState({
      review: newReview
    })
  }

  getPrediction() {
    console.log(this.state.review)
    let defaultResult = {
      sentiment: "Positive",
      confidence: "99%",
      review: this.state.review
    }
    this.setState({
      result: defaultResult
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <div className="header">
            <div className="row">
              <h4 className="navbar-brand float-left">review sentiment classifier</h4>
            </div>
            <div className="row">
              <a href="https://www.bendevera.com" className="author-heading float-left">by: bendevera.</a>
            </div>
          </div>
        </nav>
        <TextBox passReview={this.setReview}/>
        <Result payload={this.state.result} />
        <button className="btn btn-outline-dark" onClick={this.getPrediction}>predict sentiment</button>
        <PredictionInfo />
        <TrainInfo />
        <DeployInfo />
      </div>
    )
  }
}

export default App;
