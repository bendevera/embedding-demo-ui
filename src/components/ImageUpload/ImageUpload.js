import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faBowlingBall } from '@fortawesome/free-solid-svg-icons'
import './ImageUpload.css';

let ImageUpload = (props) => {
    if (!props.loading) {
        return (
            <div className='buttons fadein'>
                <div className='button'>
                    <label htmlFor='single'>
                        <FontAwesomeIcon icon={faImage} color='#e8effa' size='10x' />
                    </label>
                    <input type='file' name='file' id='single' onChange={props.onChange} /> 
                </div>
            </div>
        )
    }
    return (
        <div className='buttons fadein'>
            <div className='button'>
                <div className='spinner fadein'>
                    <FontAwesomeIcon icon={faBowlingBall} size='5x' color='black' spin />
                </div>
            </div>
        </div>
    )
}

export default ImageUpload