import React from 'react';
import './DeployInfo.css';

function DeployInfo() {
    return (
        <div className="deploy-info-container">
            <div className="info-wrapper">
                <h3>how was everything deployed?</h3>
                <div className="row">
                    <div className="col-md-6 col-xs-12 info-elem">
                        <strong>frontend</strong> | this react frontend was deployed to the web on heroku.
                    </div>
                    <div className="col-md-6 col-xs-12 info-elem">
                        <strong>backend</strong> | the trained model was saved after training and is loaded onto the live API that is hosted on an AWS ec2 instance.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeployInfo;