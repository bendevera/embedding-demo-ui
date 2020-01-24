import React from 'react';
import './Result.css';
import ConfusionMatrix from '../ConfusionMatrix/ConfusionMatrix';

const confusionMatrixData = {
    true_positive: .3,
    true_negative: .12,
    false_positive: .08,
    false_negative: .5
}

class Result extends React.Component {
    constructor(props) {
        super(props)
        this.sendAnswer = this.sendAnswer.bind(this);
    }

    sendAnswer(e) {
        let answer = {
            answer: e.target.getAttribute("value"),
            predicted: this.props.payload.class,
            send: this.props.send
        }
        this.props.passAnswer(answer)
    }

    componentWillMount() {
        this.props.resetResult()
    }

    render() {
        let payload = this.props.payload;
        const colorKey = {
            "positive": "#bcebc4",
            "negative": "#ffd1d1",
            "airplane": "#b8fcca",
            "car": "#c1f7f4",
            "cat": "#eecdfa",
            "dog": "#ffeecf",
            "flower": "#dcffc2",
            "fruit": "#dac0fc",
            "motorbike": "#fbfcc2",
            "person": "#c3d8f7"
          }

        if (payload) {
            let confidence = Math.round(payload.confidence*100);
            if (this.props.answered) {
                let reviewSection = (<div></div>);
                if (this.props.matrixData) {
                    reviewSection = (<ConfusionMatrix data={this.props.matrixData}/>);
                }
                return (
                    <div className="result-container">
                        <div className="row result-wrapper mx-0">
                            <div className="col left-side">
                                <div className="row sentiment-section" style={{backgroundColor: colorKey[payload.class]}}>
                                    <strong>{payload.class}</strong>
                                </div>
                                <div className="row confidence-section">
                                    {confidence}% confident
                                </div>
                            </div>
                            <div className="col review-section">
                                {payload.review}
                            </div>
                        </div>
                        {reviewSection}
                    </div>
                )
            }
            return (
                <div className="result-container">
                    <div className="row result-wrapper mx-0">
                        <div className="col left-side">
                            <div className="row sentiment-section" style={{backgroundColor: colorKey[payload.class]}}>
                                <strong>{payload.class}</strong>
                            </div>
                            <div className="row confidence-section">
                                {confidence}% confident
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
            <div>
            </div>
        )
    }
}

export default Result;