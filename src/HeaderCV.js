import React from "react";
import "./Curriculum.css";
import student from "./Data/student";

const Header = () => {
  return (
      <>
        <div id="header-name">
          <h2>{ student.name }</h2>
          <h5>{ student.address } &nbsp;{"⚪"}&nbsp; {student.tel} &nbsp;{"⚪"}&nbsp; <address> <b>{ student.email }</b></address></h5>
        </div>
      </>
  )
}

export default Header;
