import React from 'react';
import './PredictionInfo.css';

function PredictionInfo() {
    return (
        <div className="prediction-info-container">
            <div className="info-wrapper">
                <h3>what makes these predictions?</h3>
                <div className="row">
                    <div className="col-md-4 col-xs-12 info-elem">
                        1. your review is sent to a REST API that makes a request to <a href="https://www.basilica.ai/">basilica’s</a> product review text embedding service to vectorize your review.
                    </div>
                    <div className="col-md-4 col-xs-12 info-elem">
                        2. that embedding is fed into a trained logistic regression model that predicts whether the review is positive or negative.
                    </div>
                    <div className="col-md-4 col-xs-12 info-elem">
                        3. that prediction is sent in the response to your original request to the API to be displayed on the frontend.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PredictionInfo;