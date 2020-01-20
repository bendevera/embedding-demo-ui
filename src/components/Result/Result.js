import React from 'react';
import './Result.css';


class Result extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let payload = this.props.payload;

        if (payload) {
            let confidence = Math.round(payload.confidence*100)/100;
            if (payload.sentiment == "Positive") {
                return (
                    <div className="result-container">
                        <div className="row result-wrapper mx-0">
                            <div className="col left-side">
                                <div className="row sentiment-section positive">
                                    <strong>{payload.sentiment}</strong>
                                </div>
                                <div className="row confidence-section">
                                    {confidence}% confident about prediction.
                                </div>
                            </div>
                            <div className="col review-section">
                                {payload.review}
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <div className="result-container">
                    <div className="row result-wrapper mx-0">
                        <div className="col left-side">
                            <div className="row sentiment-section negative">
                                {payload.sentiment}
                            </div>
                            <div className="row confidence-section">
                                {confidence}% confident about prediction.
                            </div>
                        </div>
                        <div className="col review-section">
                            {payload.review}
                        </div>
                    </div>
                </div>
            )
        } 

        return (
            <div></div>
        )
    }
}

export default Result;