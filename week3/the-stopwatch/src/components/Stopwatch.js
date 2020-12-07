import React, {Component} from 'react'

// ------------------------------------------------------------------------------- Importing Components
import TimeElapsed from './branch/TimeElapse'
import LapTimes from './branch/LapTimes'

// ------------------------------------------------------------------------------- Class Component For The Stopwatch
export default class Stopwatch extends Component {
    //  ---------------------------------------------------------------------------- Setting State
        state = this.initialState = {
            isRunning: false,
            lapTimes: [],
            timeElapsed: 0
        }
    //  ----------------------------------------------------------------------------Activate Timer
    toggle() {
        this.setState({isRunning: !this.state.isRunning}, () => {
            this.state.isRunning ? this.startTimer() : clearInterval(this.timer)});
    }
    //  ---------------------------------------------------------------------------- Lap Time
    lap() {
        const {lapTimes, timeElapsed} = this.state;
        this.setState({lapTimes: lapTimes.concat(timeElapsed)});
    }
    //  ---------------------------------------------------------------------------- Reset Timer
    reset() {
        clearInterval(this.timer);
        this.setState(this.initialState);
    }
    //  ---------------------------------------------------------------------------- Start Timer 
    startTimer() {
        this.startTime = Date.now();
        this.timer = setInterval(this.update, 10);
    }
    //  -------------------------------------------------------------------------- Set Timer Back To 0
    update() {
        const delta = Date.now() - this.startTime;
        this.setState({timeElapsed: this.state.timeElapsed + delta});
        this.startTime = Date.now();
    }
    render() {
        //  ------------------------------------------------------------------------ State Variables
        const {isRunning, lapTimes, timeElapsed} = this.state;
        // ------------------------------------------------------------------------ Handeling Button Change
        ['lap', 'update', 'reset', 'toggle'].forEach((method) => {
            this[method] = this[method].bind(this);
        });
        
        return (
            <div>
                <header className='flex-row'>
                    <h1>Stop Watch</h1>
                </header>
                <TimeElapsed id='timer' timeElapsed={timeElapsed} />
                <div className='flex-row'>
                    <button style={{backgroundColor: isRunning ? 'red' : 'green'}} onClick={this.toggle}>
                    {isRunning ? 'Stop' : 'Start'}
                    </button>
                    <button 
                        style={{backgroundColor: isRunning ? 'dodgerblue' : 'gray'}}
                        onClick={isRunning ? this.lap : this.reset}
                        disabled={!isRunning && !timeElapsed}>
                        {isRunning || !timeElapsed ? 'Lap' : 'Reset'}
                    </button>
                </div>
                {lapTimes.length > 0 && <LapTimes lapTimes={lapTimes} />}
            </div>
        );
    }
}