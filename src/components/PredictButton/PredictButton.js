import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'

const PredictButton = (props) => {
    if (!props.uploading) {
        return (
            <button className="btn btn-outline-dark" onClick={props.getPrediction}>predict sentiment</button>
        )
    }
    return (
        <FontAwesomeIcon icon={faBowlingBall} size='2x' color='black' spin />
    )
}

export default PredictButton;