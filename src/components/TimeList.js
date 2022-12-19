import React, { Component, component } from 'react'
import './TimeList.css';
import _ from 'lodash'

import Timer from "easytimer.js";
// extra components
import TimeCard from './TimeCard'

class TimeList extends Component {
    constructor(props) {
        super(props);

        this.renderTimeList = this.renderTimeList.bind(this);
    }

    renderTimeList() {
        var times = JSON.parse(window.localStorage.getItem('FOCUS'));
        console.log('times: ' + times);
        var time_cards = _.map(
            times, 
            function(time, idx) {
                return (
                    <TimeCard 
                        key={idx}
                        time={time}
                    />
                );
            }.bind(this)
        );
        console.log('time cards: ' + time_cards);
        return time_cards;
    }

    render () {
        return (
            <div className='time-list'>
                <div className='title'>
                    <h2>Time List</h2>
                </div>
                <div className='list'>{this.renderTimeList()}</div>
            </div>
        );
    };
}

export default TimeList;