import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeGrade} from '../../../../Redux/grades';

import _ from 'lodash';

import GradeForm from './gradesForm/GradesForm';

import './grades.css';

export default function Grades() {
    const initialState = useSelector(grades => grades.gradesReducer);
    const dispatch = useDispatch();
    
    return (
        <div className='movies'>
            <div>
                <h1 style={{paddingTop: '40px', paddingBottom: '15px'}}>Enter Your Classes and Grades</h1>
                <GradeForm />
            </div>
            <div className='movie-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Classes</th>
                            <th>Grades</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(initialState, grade => (
                            <tr style={{textAlign: 'center'}} id={grade._id} className='tr-container'>
                                <td>{grade.class}</td>
                                <td>{grade.grade}</td>         
                                <button onClick={() => dispatch(removeGrade(grade.grade))}>X</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}