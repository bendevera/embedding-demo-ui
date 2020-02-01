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
      answered: false,
      matrixData:null
    }
  }

  setReview = newReview => {
    this.setState({
      review: newReview
    })
  }

  sendImage = e => {
    const file = e.target.files[0]
    this.setState({ uploading: true })
    // #2 Catching wrong file types on the client
    const types = ['image/png', 'image/jpeg']
    if (types.every(type => file.type !== type)) {
      alert(`'${file.type}' is not a supported format`)
      this.setState({ uploading: false })
      return 
    } 
    // #3 Catching files that are too large on the client
    // if (file.size > 450000) {
    //   alert(`'${file.name}' is too large, please pick a smaller file`)
    //   this.setState({ uploading: false })
    //   return
    // }

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
    .catch((error) => {
      this.setState({
        uploading: false
      })
      console.log(error)
    })
  }

  getPrediction = () => {
    this.setState({ uploading: true })
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
      this.setState({
        result: responseJson,
        answered: false,
        uploading: false
      })
    })
    .catch((error) => {
      this.setState({
        uploading: false
      })
      console.log(error)
    })
  }

  sendAnswer = answer => {
    // need to add fetch call to report answer
    console.log(answer)
    this.setState({
      answered: true
    })
    if (answer.send) {
      fetch(config.apiUrl+'/accuracy/sentiment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answer)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          matrixData: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  resetResult = () => {
    this.setState({
      result: null
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <SentimentApp setReview={this.setReview} 
                      uploading={this.state.uploading}
                      result={this.state.result} 
                      answered={this.state.answered}
                      sendAnswer={this.sendAnswer}
                      getPrediction={this.getPrediction}
                      resetResult={this.resetResult}
                      matrixData={this.state.matrixData} />
          </Route>
          <Route path="/image">
            <ImageApp sendImage={this.sendImage}
                      uploading={this.state.uploading}
                      result={this.state.result}
                      answered={this.state.answered}
                      sendAnswer={this.sendAnswer}
                      resetResult={this.resetResult} />
          </Route>
        </Switch>
      </Router>

    )
  }
}

export default App;
