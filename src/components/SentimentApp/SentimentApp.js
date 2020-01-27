import React from 'react';
import Navbar from '../Navbar/Navbar';
import TextBox from '../TextBox/TextBox';
import Result from '../Result/Result';
import PredictionInfo from '../PredictionInfo/PredictionInfo';
import TrainInfo from '../TrainInfo/TrainInfo';
import DeployInfo from '../DeployInfo/DeployInfo';
import PredictButton from '../PredictButton/PredictButton';
import Footer from '../Footer/Footer';

const SentimentApp  = (props) =>  {
    return (
        <div className="App">
            <Navbar curr_app="review sentiment classifier" />
            <TextBox passReview={props.setReview} />
            <Result curr_app="review sentiment classifier" send={true} matrixData={props.matrixData} payload={props.result} answered={props.answered} passAnswer={props.sendAnswer} resetResult={props.resetResult} />
            <PredictButton uploading={props.uploading} getPrediction={props.getPrediction} />
            <PredictionInfo curr_app="review sentiment classifier" />
            <TrainInfo curr_app="review sentiment classifier" />
            <DeployInfo />
            <Footer />
        </div>
    )
}

export default SentimentApp