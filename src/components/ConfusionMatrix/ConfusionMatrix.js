import React from 'react';
import './ConfusionMatrix.css';
import chroma from 'chroma-js';

const ConfusionMatrix = (props) => {
    let total = props.data.true_positive + props.data.true_negative + props.data.false_negative + props.data.false_positive
    let custom_scale = chroma.scale(['ffffff', '008ae5']).domain([0,1]);
    console.log(props.data.true_positive/total)
    console.log(props.data.true_negative/total)
    console.log(custom_scale(props.true_negative/total))
    console.log(custom_scale(props.true_positive/total))
    console.log(custom_scale(0));
    console.log(custom_scale(.5));
    custom_scale()
    let colors = {
        true_positive: custom_scale(props.data.true_positive/total),
        true_negative: custom_scale(props.data.true_negative/total),
        false_negative: custom_scale(props.data.false_negative/total),
        false_positive: custom_scale(props.data.false_positive/total)
    }
    console.log(colors);
    return (
        <div className="matrix-wrapper m-0 p-0">
            <div className="row matrix-header">
                <strong>confusion matrix</strong>
            </div>  
            <div className="row matrix-row m-0 p-0">
                <div className="col matrix-elem"
                    style={{
                        backgroundColor: colors.true_positive
                    }}>
                {props.data.true_positive}
                </div>
                <div className="col matrix-elem"
                    style={{
                        backgroundColor: colors.false_negative
                    }}>
                {props.data.false_negative}
                </div>
            </div>
            <div className="row matrix-row m-0 p-0">
                <div className="col matrix-elem"
                    style={{
                        backgroundColor: colors.false_positive
                    }}>
                {props.data.false_positive}
                </div>
                <div className="col matrix-elem"
                    style={{
                        backgroundColor: colors.true_negative
                    }}>
                {props.data.true_negative}
                </div>
            </div>
        </div>
    )
}

export default ConfusionMatrix;