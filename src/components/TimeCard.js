import React, { Component, component } from 'react';
import './TimeCard.css'

import Timer from "easytimer.js";

class TimeCard extends Component {
    constructor(props) {
        super(props);

    }


    render () {
        return (
            <div className='time-card'>
                <h3 className='time-text'>{this.props.time}</h3>
            </div>
        )
    }
}

export default TimeCard;