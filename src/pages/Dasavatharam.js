import React from "react";
import d from "./resources/Dasavatharam_data.js";
import { useState } from "react";

const Dasavatharam = () => {
    var i=0;
    var [contentO,setContentO] = useState(d(i)[0]);
    var [content, setContent] = useState(contentO.split('\n'));
    var glosary = d(i)[1];
    console.log(glosary);
    var addNewContent = (index) => {
        setContent(d(index)[0].split('\n'));
    }
    return (
    <div>
        <h1>Dasavatharam</h1>
        <div className="container">
            <div className="items glosary">{glosary.map((item, index) => (<p onClick={() => addNewContent(index)} style={{cursor: 'pointer'}}>{item}</p>))}</div>
            <p className="items content">{content.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}</p>
        </div>
    </div>
    );
};

export default Dasavatharam;