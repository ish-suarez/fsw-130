import React, { Component } from 'react';
import _ from 'lodash';

//  -------------------------------------------------------------------------- Time Elapsed Component
export default class TimeElapsed extends Component {
    //  ---------------------------------------------------------------- Function To Get Usable Number For Stopwatch
    getTime() {
        const seconds = this.props.timeElapsed / 1000;
        return {
            hour: _.toString(_.floor(seconds / 3600)),
            min: _.toString(_.floor(seconds / 60)),
            sec: _.toString(_.floor(seconds % 60)),
            msec: (seconds % 1).toFixed(3).substring(2)
        };
    }
    render() {
        //  ------------------------------------------------------------------- Number Variable 
        const units = this.getTime();

        //  ----------------------------------------------------- Setting Time To Display As Two Units
        const leftPad = (width, n) => {
            if ((n + '').length > width) {
                return n;
            }
            const padding = new Array(width).join('0');
            return (padding + n).slice(-width);
        };
        return (
            <div className='font-size center' id={this.props.id}>
                <span>{leftPad(2, units.hour)}:</span>
                <span>{leftPad(2, units.min)}:</span>
                <span>{leftPad(2, units.sec)}.</span>
                <span>{units.msec}</span>
            </div>
        );
    }
}

