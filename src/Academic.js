import React from "react";
import './Curriculum.css';
import studies from './Data/studies';

const Academic = () => {

  return (
    <>
      <div id="title">
          <h5>Formación Académica</h5>
      </div>
        <p>&nbsp;-&nbsp;&nbsp; {studies.university}</p>
        <p>&nbsp;-&nbsp;&nbsp; {studies.highSchool}</p>
        <p>&nbsp;-&nbsp;&nbsp; {studies.lowHighSchool}</p>
    </>
  )
}

export default Academic;
