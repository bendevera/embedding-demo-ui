import React from 'react';
import './App.css';
import TextBox from '../TextBox/TextBox';
import ImageUpload from '../ImageUpload/ImageUpload';
import Result from '../Result/Result';
import PredictionInfo from '../PredictionInfo/PredictionInfo';
import TrainInfo from '../TrainInfo/TrainInfo';
import DeployInfo from '../DeployInfo/DeployInfo';
import config from '../../config';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr_app: "review sentiment classifier",
      review: "",
      uploading: false,
      result: null,
      answered: false
    }
  }

  setApp = e  => {
    let val = e.target.getAttribute("value")
    console.log(val)
    if (val == "text") {
      this.setState({
        curr_app: "review sentiment classifier",
        answered: false,
        result: null, 
        uploading: false
      })
    } else {
      this.setState({
        curr_app: "natural image classifier", 
        answered: false,
        result: null,
        uploading: false
      })
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

    if (this.state.curr_app == "review sentiment classifier") {
      return (
        <div className="App">
          <nav className="navbar navbar-light bg-light">
            <div className="header">
              <div className="col m-0 p-0">
                <div className="row">
                  {/* <h4 className="navbar-brand float-left">review sentiment classifier</h4> */}
                  <div className="btn-group dropright">
                    <button type="button" className="navbar-brand dropdown-toggle brand-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.curr_app}
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" onClick={this.setApp} value="text" href="#">review sentiment classifier</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" onClick={this.setApp} value="image" href="#">natural image classifier</a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <a href="https://www.bendevera.com" className="author-heading float-left">by: bendevera.</a>
                </div>
              </div>
            </div>
          </nav>
          <TextBox passReview={this.setReview} />
          <Result payload={this.state.result} answered={this.state.answered} passAnswer={this.sendAnswer} />
          <button className="btn btn-outline-dark" onClick={this.getPrediction}>predict sentiment</button>
          <PredictionInfo curr_app={this.state.curr_app} />
          <TrainInfo curr_app={this.state.curr_app} />
          <DeployInfo />
        </div>
      )
    }
    const imageClasses = ["airplane", "car", "cat", "dog", "flower", "fruit", "motorbike", "person"]
    const imageColors = ["#b8fcca", "#c1f7f4", "#eecdfa", "#ffeecf", "#dcffc2", "#dac0fc", "#fbfcc2", "#c3d8f7"]
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <div className="header">
            <div className="col m-0 p-0">
              <div className="row">
                {/* <h4 className="navbar-brand float-left">review sentiment classifier</h4> */}
                <div className="btn-group dropright">
                  <button type="button" className="navbar-brand dropdown-toggle brand-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.curr_app}
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" onClick={this.setApp} value="text" href="#">review sentiment classifier</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" onClick={this.setApp} value="image" href="#">natural image classifier</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <a href="https://www.bendevera.com" className="author-heading float-left">by: bendevera.</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="image-classes">
          {imageClasses.map((item, index) => {
            return (
              <div className="image-class" key={index}
              style={{backgroundColor: imageColors[index]}}>
                {item}
              </div>
            )
          })}
        </div>
        <ImageUpload onChange={this.sendImage} loading={this.state.uploading} />
        <Result payload={this.state.result} answered={this.state.answered} passAnswer={this.sendAnswer} />
        <PredictionInfo curr_app={this.state.curr_app} />
        <TrainInfo curr_app={this.state.curr_app} />
        <DeployInfo />
      </div>
    )
  }
}

export default App;
