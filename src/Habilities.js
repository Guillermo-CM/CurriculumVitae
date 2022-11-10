import React from "react";
import habilities from "./Data/hability";
import './Curriculum.css'
const Hability = () => {
    return (
        <>
            <div id="title">
                <h5>Conocimientos</h5>
            </div>
            <ul>
                {
                habilities.map(item => {
                    return (
                        <>
                            <li>{item[0]}</li>
                            <br/>
                            <li>{item[1]}</li>
                            <br/>
                            <li>{item[2]}</li>
                            <br/>
                            <li>{item[3]}</li>
                            <br/>
                            <li>{item[4]}</li>
                            <br/>
                            <li>{item[5]}</li>
                            <br/>
                            <li>{item[6]}</li>
                            <br/>
                        </>
                    )
                    })
                }
            </ul>
        </>
    );
}

export default Hability;