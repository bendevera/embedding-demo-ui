import React from 'react';
import './TrainInfo.css';

function TrainInfo() {
    return (
        <div className="train-info-container">
            <div className="info-wrapper">
                <h3>how was the model trained?</h3>
                <div className="row">
                    <div className="col-md-3 col-xs-12 info-elem">
                        1. the dataset used to train the logistic regression model was 200k amazon product reviews that can be downloaded <a href="https://drive.google.com/drive/folders/0Bz8a_Dbh9Qhbfll6bVpmNUtUcFdjYmF2SEpmZUZUcVNiMUw1TWN6RDV3a0JHT3kxLVhVR2M">here</a>.
                    </div>
                    <div className="col-md-3 col-xs-12 info-elem">
                        2. each review was converted into a text embedding by the <a href="https://www.basilica.ai/">basilica</a> API.
                    </div>
                    <div className="col-md-3 col-xs-12 info-elem">
                        3. those embeddings and their targets were fed into the logistic regression model to train it.
                    </div>
                    <div className="col-md-3 col-xs-12 info-elem">
                        4. the resulting model had a testing accuracy of 96%!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainInfo;