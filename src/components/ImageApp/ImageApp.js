import React from 'react';
import Navbar from '../Navbar/Navbar';
import ImageUpload from '../ImageUpload/ImageUpload';
import Result from '../Result/Result';
import PredictionInfo from '../PredictionInfo/PredictionInfo';
import TrainInfo from '../TrainInfo/TrainInfo';
import DeployInfo from '../DeployInfo/DeployInfo';
import Footer from '../Footer/Footer';

const ImageApp  = (props) =>  {
    const imageClasses = ["airplane", "car", "cat", "dog", "flower", "fruit", "motorbike", "person"]
    const imageColors = ["#b8fcca", "#c1f7f4", "#eecdfa", "#ffeecf", "#dcffc2", "#dac0fc", "#fbfcc2", "#c3d8f7"]
    return (
      <div className="App">
        <Navbar curr_app="natural image classifier" />
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
        <Footer />
      </div>
    )
}

export default ImageApp;