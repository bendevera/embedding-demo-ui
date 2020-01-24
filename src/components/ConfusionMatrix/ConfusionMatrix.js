import React from 'react';
import './ConfusionMatrix.css';
import chroma from 'chroma-js';

const ConfusionMatrix = (props) => {
    let custom_scale = chroma.scale().domain([0,1]);
    let total = props.data.total;
    let colors = {
        true_positive: custom_scale(props.data.true_positives/total),
        true_negative: custom_scale(props.data.true_negatives/total),
        false_negative: custom_scale(props.data.false_negatives/total),
        false_positive: custom_scale(props.data.false_positives/total)
    }
    return (
        <div className="matrix-wrapper m-0 p-0">
            <div className="row matrix-header">
                <strong>confusion matrix</strong>
            </div>  
            <div className="row matrix-row m-0 p-0">
                <div className="col matrix-elem text-success"
                    style={{
                        backgroundColor: colors.true_positive
                    }}>
                True Positive<br/>{props.data.true_positives}
                </div>
                <div className="col matrix-elem text-danger"
                    style={{
                        backgroundColor: colors.false_negative
                    }}>
                False Negative<br/>{props.data.false_negatives}
                </div>
            </div>
            <div className="row matrix-row m-0 p-0">
                <div className="col matrix-elem text-danger"
                    style={{
                        backgroundColor: colors.false_positive
                    }}>
                False Positive<br/>{props.data.false_positives}
                </div>
                <div className="col matrix-elem text-success"
                    style={{
                        backgroundColor: colors.true_negative
                    }}>
                True Negative<br/>{props.data.true_negatives}
                </div>
            </div>
        </div>
    )
}

export default ConfusionMatrix;