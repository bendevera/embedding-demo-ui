import React from 'react';
import './App.css';
import config from '../../config';
import SentimentApp from '../SentimentApp/SentimentApp'
import ImageApp from '../ImageApp/ImageApp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: "",
      uploading: false,
      result: null,
      answered: false
    }
  }

  setReview = newReview => {
    this.setState({
      review: newReview
    })
  }

  sendImage = e => {
    const file = e.target.files[0]
    console.log(file)
    this.setState({ uploading: true })
    // #2 Catching wrong file types on the client
    const types = ['image/png', 'image/jpeg']
    if (types.every(type => file.type !== type)) {
      alert(`'${file.type}' is not a supported format`)
      this.setState({ uploading: false })
      return 
    } 
    // #3 Catching files that are too large on the client
    if (file.size > 150000) {
      alert(`'${file.name}' is too large, please pick a smaller file`)
      this.setState({ uploading: false })
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    fetch(config.apiUrl+'/predict/image', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        uploading: false,
        answered: false,
        result: resJson
      })
    })
  }

  getPrediction = () => {
    console.log(this.state.review)
    let data = {
      "review": this.state.review
    }
    fetch(config.apiUrl+'/predict/sentiment', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({
        result: responseJson,
        answered: false
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  sendAnswer = answer => {
    console.log(answer)
    this.setState({
      answered: true
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <SentimentApp setReview={this.setReview} 
                      result={this.state.result} 
                      answered={this.state.answered}
                      sendAnswer={this.sendAnswer}
                      getPrediction={this.getPrediction} />
          </Route>
          <Route path="/image">
            <ImageApp sendImage={this.sendImage}
                      uploading={this.state.uploading}
                      result={this.state.result}
                      answered={this.state.answered}
                      sendAnswer={this.sendAnswer} />
          </Route>
        </Switch>
      </Router>

    )
  }
}

export default App;
