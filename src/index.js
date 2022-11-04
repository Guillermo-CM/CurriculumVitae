import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './HeaderCV';
import Academic from './Academic';
import Course from './Courses';
import Hability from './Habilities';
import Experience from './Experience';

const header = document.querySelector('#root')
const academic = document.querySelector('.academic')
const course = document.querySelector('.courses')
const hability = document.querySelector('.habilities')
const experience = document.querySelector('.experience')

ReactDOM.render( <Header />, header );
ReactDOM.render( <Academic />, academic );
ReactDOM.render( <Course />, course);
ReactDOM.render( <Hability/>, hability);
ReactDOM.render( <Experience/>, experience);

// console.log(Experience);
