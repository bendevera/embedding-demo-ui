import React from 'react';
import './Result.css';


class Result extends React.Component {
    constructor(props) {
        super(props)
        this.sendAnswer = this.sendAnswer.bind(this);
    }

    sendAnswer(e) {
        let answer = e.target.value;
        this.props.passAnswer(answer)
    }

    render() {
        let payload = this.props.payload;

        if (payload) {
            let confidence = Math.round(payload.confidence*100)/100;
            if (payload.sentiment == "Positive") {
                if (this.props.answered) {
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
                                <div className="row sentiment-section positive">
                                    <strong>{payload.sentiment}</strong>
                                </div>
                                <div className="row confidence-section">
                                    {confidence}% confident about prediction.
                                </div>
                            </div>
                            <div className="col m-0 p-0">
                                <div className="row confirm-section m-0 p-0">
                                    <div className="col correct-prediction"
                                        onClick={this.sendAnswer} value="correct">
                                        correct
                                    </div>
                                    <div className="col incorrect-prediction"
                                        onClick={this.sendAnswer} value="incorrect">
                                        incorrect
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            if (this.props.answered) {
                return (
                    <div className="result-container">
                        <div className="row result-wrapper mx-0">
                            <div className="col left-side">
                                <div className="row sentiment-section negative">
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
                                <strong>{payload.sentiment}</strong>
                            </div>
                            <div className="row confidence-section">
                                {confidence}% confident about prediction.
                            </div>
                        </div>
                        <div className="col m-0 p-0">
                            <div className="row confirm-section m-0 p-0">
                                <div className="col correct-prediction"
                                    onClick={this.sendAnswer} value="correct">
                                    correct
                                </div>
                                <div className="col incorrect-prediction"
                                    onClick={this.sendAnswer} value="incorrect">
                                    incorrect
                                </div>
                            </div>
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