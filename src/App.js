import React, { Component, component } from 'react'
import './App.css';

// import component
import TimeList from './containers/TimeListContainer'
import MyTimer from './containers/TimerContainer'
import CountDown from './components/CountDown';

// import constants
import {TIMER, COUNTDOWN} from './constants';

// Redux store
import { store } from './store';
import { Provider } from 'react-redux';

// actions
import { runTest } from './actions';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: TIMER
    };

    store.dispatch(runTest());

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(e) {
    var checked = this.refs.toggle.checked;

    if (checked === true) {
      this.setState({
        ...this.state,
        mode: TIMER
      });
    } else {
      this.setState({
        ...this.state,
        mode: COUNTDOWN
      });
    }
  }


  render() {
    return (
      <Provider store = { store }>
        <div className='App d-flex flex-column container'>
        <div className='Header'>
          <h1>Focus</h1>
        </div>
        <div className='d-flex flex-fill justify-content-center flex-column'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <div onClick = {this.handleChanges} className='timer-toggle'>
                <input
                  type='checkbox'
                  defaultChecked='checked'
                  data-toggle='toggle'
                  data-on='Timer'
                  data-off='Countdown'
                  ref={'toggle'}
                />
              </div>
              <div className='timer-container'>
                {this.state.mode === TIMER && <MyTimer></MyTimer>}
                {this.state.mode === COUNTDOWN && <CountDown></CountDown>}
              </div>
              <div className='times-list'>
                <TimeList></TimeList>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-grow-1'></div>
      </div>
      </Provider>
    );
  }
}

export default App;