import React, { Component } from "react";

class Countdown extends Component {
    state ={ timerOn: false, timerStart: 0, timerTime: 0 }

    render() {
        return (
        <div className="Countdown">
            <div className="Countdown-header">Countdown</div>
        </div>
        );
    }
}
export default Countdown;