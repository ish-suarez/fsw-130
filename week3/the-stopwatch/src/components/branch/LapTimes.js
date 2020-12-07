import React, { Component } from 'react';
import _ from 'lodash';

//  ------------------------------------------------------------------------- Importing Components
import TimeElapsed from './TimeElapse';

//  ------------------------------------------------------------------------- LapTimes Class Component
export default class LapTimes extends Component {
    render() {
        //  ---------------------------------------------------------- Setting Numbers Into A Table Row With Time In Table Data
        const rows = _.map(this.props.lapTimes, (lapTime, index) =>
            <tr key={++index}>
                <td className='font-size table-color'>{index + 1}.</td>
                <td><TimeElapsed timeElapsed={lapTime} /></td>
            </tr>
        );
        return (
            //  ------------------------------------------------------------ Returns Table With Lap Times
            <table id='lap-times'>
                <thead>
                    <th>Lap</th>
                    <th>Time</th>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
};