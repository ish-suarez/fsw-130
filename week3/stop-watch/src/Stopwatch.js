import React, { Component } from "react";

import _ from '../node_modules/lodash'


class Stopwatch extends Component {
    state ={ timerOn: false, timerStart: 0, timerTime: 0, lapTimes: [] }

    startTimer = () => {
        this.setState({ timerOn: !this.state.timerOn, timerTime: this.state.timerTime, timerStart: Date.now() - this.state.timerTime });
        
        this.timer = setInterval( () => { this.setState({ timerTime: Date.now() - this.state.timerStart})}, 10);
    };

    stopTimer = () => { this.setState({timerOn: false}); clearInterval(this.timer);
    };

    resetTimer = () => { this.setState({ timerStart: 0, timerTime: 0, lapTimes: []}); 
    };

    lap = () => {
        const {lapTimes, timerTime} = this.state
        this.setState({lapTimes: lapTimes.concat(timerTime)});
    }

    render() {
        
        const {timerTime} = this.state
        const lap = this.lap
        

        

        let centiseconds = _.slice('0' + (_.floor(timerTime / 10) % 100), -2);
        let seconds = _.slice('0' + (_.floor(timerTime / 1000) % 60), -2);
        let minutes = _.slice('0'+ (_.floor(timerTime / 60000) % 60), -2);
        let hours = _.slice('0' + _.floor(timerTime / 3600000), -2);

const laps = this.state.lapTimes.map((laptime, index) => 
            <div>
                {laptime}
            </div>
        );

        // const lapedTime = _.map(lap, (centiseconds, seconds, minutes, hours) => (<div>{hours} : {minutes} : {seconds} : {centiseconds}</div>))
        return (
        <div className="Stopwatch">
            <div className="Stopwatch-header">Stopwatch</div>
            <div>
                {hours} : {minutes} : {seconds} : {centiseconds} 
            </div>
            {this.state.timerOn === false && timerTime === 0 && (<button onClick={this.startTimer}>Start</button>)}
            {this.state.timerOn === true && timerTime > 0 && ( <button onClick={() => {lap(timerTime)}}>Lap</button>)}
            {this.state.timerOn === true && (<button onClick={this.stopTimer}>Stop</button>)}
            {this.state.timerOn === false && this.state.timerTime > 0 && (<button onClick={this.startTimer}>Resume</button>)}
            {this.state.timerOn === false && this.state.timerTime > 0 && (<button onClick={this.resetTimer}>Reset</button>)}
            
            {laps}
        </div>
        );
    }
};

export default Stopwatch;