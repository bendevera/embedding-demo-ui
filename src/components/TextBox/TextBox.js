import React from 'react';
import './TextBox.css';

class TextBox extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = e => {
        this.props.passReview(e.target.value)
    }

    render() {
        return (
            <div className="textbox-container">
                <textarea onChange={this.handleChange} placeholder="enter a negative or positive review!"></textarea>
            </div>
        )
    }
}

export default TextBox;