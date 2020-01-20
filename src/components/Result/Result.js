import React from 'react';
import './Result.css';


class Result extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let payload = this.props.payload;

        if (payload) {
            return (
                <div className="result-container">
                    <div className="row result-wrapper mx-0">
                        <div className="col left-side">
                            <div className="row sentiment-section">
                                {payload.sentiment}
                            </div>
                            <div className="row confidence-section">
                                {payload.confidence} confident about prediction.
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