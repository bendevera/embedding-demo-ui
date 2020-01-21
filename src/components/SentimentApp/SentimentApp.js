import React from 'react';
import {Link} from "react-router-dom";
import TextBox from '../TextBox/TextBox';
import Result from '../Result/Result';
import PredictionInfo from '../PredictionInfo/PredictionInfo';
import TrainInfo from '../TrainInfo/TrainInfo';
import DeployInfo from '../DeployInfo/DeployInfo';

const SentimentApp  = (props) =>  {
    console.log(props)
    return (
        <div className="App">
            <nav className="navbar navbar-light bg-light">
                <div className="header">
                <div className="col m-0 p-0">
                    <div className="row">
                    <div className="btn-group dropright">
                        <button type="button" className="navbar-brand dropdown-toggle brand-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        review sentiment classifier
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/" className="dropdown-item">review sentiment classifier</Link>
                        {/* <a className="dropdown-item" onClick={props.setApp} value="text" href="#">review sentiment classifier</a> */}
                        <div className="dropdown-divider"></div>
                            <Link to="/image" className="dropdown-item">natural image classifier</Link>
                        {/* <a className="dropdown-item" onClick={props.setApp} value="image" href="#">natural image classifier</a> */}
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <a href="https://www.bendevera.com" className="author-heading float-left">by: bendevera.</a>
                    </div>
                </div>
                </div>
            </nav>
            <TextBox passReview={props.setReview} />
            <Result payload={props.result} answered={props.answered} passAnswer={props.sendAnswer} />
            <button className="btn btn-outline-dark" onClick={props.getPrediction}>predict sentiment</button>
            <PredictionInfo curr_app="review sentiment classifier" />
            <TrainInfo curr_app="review sentiment classifier" />
            <DeployInfo />
        </div>
    )
}

export default SentimentApp