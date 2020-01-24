import React from 'react';
import {Link} from "react-router-dom";
import ImageUpload from '../ImageUpload/ImageUpload';
import Result from '../Result/Result';
import PredictionInfo from '../PredictionInfo/PredictionInfo';
import TrainInfo from '../TrainInfo/TrainInfo';
import DeployInfo from '../DeployInfo/DeployInfo';

const ImageApp  = (props) =>  {
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
                    natural image classifier
                  </button>
                  <div className="dropdown-menu">
                            <Link to="/" className="dropdown-item">review sentiment classifier</Link>
                        <div className="dropdown-divider"></div>
                            <Link to="/image" className="dropdown-item">natural image classifier</Link>
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
        <ImageUpload onChange={props.sendImage} loading={props.uploading} />
        <Result send={false} payload={props.result} answered={props.answered} passAnswer={props.sendAnswer} resetResult={props.resetResult} />
        <PredictionInfo curr_app="natural image classifier" />
        <TrainInfo curr_app="natural image classifier" />
        <DeployInfo />
      </div>
    )
}

export default ImageApp