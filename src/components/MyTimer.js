import React, { Component, component } from 'react'
import './MyTimer.css';

import Timer from "easytimer.js";
import { tracked_times } from '../reducers/tracked_times';
import { addTime } from '../actions';
import { compose } from 'redux';
//import * as EasyTimer from 'easytimer.js'

class MyTimer extends Component {

    constructor(props) {
        super(props);

        var timer = new Timer();

        this.state = {
            timer_text: timer.getTimeValues().toString(),
            timer: timer,
            timer_state: 'stopped'
        };

        // Bind functions
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.logTime = this.logTime.bind(this);

        // Add the listeners
        timer.addEventListener('secondsUpdated', this.onTimeUpdated.bind(this));

        timer.addEventListener('started', this.onTimeUpdated.bind(this));

        timer.addEventListener('reset', this.onTimeUpdated.bind(this));
    }

    componentWillUnmount() {
        if (this.state.timer !== null) {
            this.state.timer.stop();
        }
    }

    onTimeUpdated(e) {
        this.setState({
            ...this.state,
            timer_text: this.state.timer.getTimeValues().toString()
        });
    }

    startTimer() {
        this.state.timer.start();

        this.setState({
            ...this.state,
            timer_state: 'ticking'
        })
    }

    stopTimer() {
        this.state.timer.stop();

        this.setState({
            ...this.state,
            timer_state: 'stopped'
        })
    }

    pauseTimer() {
        this.state.timer.pause();

        this.setState({
            ...this.state,
            timer_state: 'paused'
        })
    }

    resetTimer() {
        this.state.timer.reset();

        this.setState({
            ...this.state,
            timer_state: 'ticking'
        })
    }

    logTime() {
        //this.props.addTime(JSON.parse(JSON.stringify(this.state.timer.getTimeValues())));
        const time = this.state.timer.getTimeValues().toString();
        const times = JSON.parse(window.localStorage.getItem('FOCUS'));
        //console.log(times);
        var new_times;
        if (times === null) {
            new_times = [time];
        } else {
            new_times = [].concat(time, times);
        }
        console.log('new_times:' + new_times)
        window.localStorage.setItem('FOCUS', JSON.stringify(new_times));
        window.location.reload(false);
    }

    render() {
        return (
            <div className='Timer'>
                <div className='timer-text'>
                    <h2>{this.state.timer_text}</h2>
                </div>
                <div className='timer-buttons text-center'>
                    {this.state.timer_state !== 'ticking' && (
                        <button onClick = {this.startTimer} className='btn btn-success'>
                            <i className='fas fa-play'></i>
                        </button>
                    )}
                    {this.state.timer_state === 'ticking' && (
                        <button onClick = {this.pauseTimer} className='btn btn-warning'>
                            <i className='fas fa-pause'></i>
                        </button>
                    )}
                    <button onClick = {this.resetTimer} className='btn btn-primary'>
                        <i className='fas fa-sync-alt'></i>
                    </button>
                </div>
                <div className='log-button'>
                    <button onClick={this.logTime} className='btn btn-block btn-secondary'>
                        Log Time
                    </button>
                </div>
            </div>
        )
    }
}

export default MyTimer;