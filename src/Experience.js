import React from "react";
import experience from "./Data/experience";
import './Curriculum.css'


const Experience = () => {
    return (
    <div>
        <div id="title">
            <h5>Experiencia Laboral</h5>  
        </div>
        {
            experience.map( (item) => 
            <>
                <div className="space">
                <p><span>{`${item.enterprise} - ${item.job}`}</span></p>
                {
                    item.activities.map( (item) =>
                    <ul>
                        <li>{item.activity}</li>
                    </ul>
                    )
                }
                </div>
            </>
            )
        }
    </div>
    )
}

export default Experience;

console.log(experience);