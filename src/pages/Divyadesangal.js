import "./App.css";
import React, { useState } from 'react';
import m from "./resources/divyadesam_data.js";

const Divyadesangal = () => {
  var [flag, setFlag] = useState(false);
  var [modalMessage, setModalMessage] = useState("");
  function toggleFlag(index) {
    console.log("toggle 2 fun end");
    if (flag === true) {
      setFlag(false);
    }
    else {
      setModalMessage(m(index));
      setFlag(true);
    }
  }
  //DOM
  const myElement = (
    <div>
        <div id="myModal" className={`modal ${flag ? "active" : ""}`} >
          <div className="modal-content">
            <span className="close" id="close" onClick={() => toggleFlag(0)}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
        <h1>108 divya desangal</h1>
        <p>The Divya Desams are classified into six regions:<br/>
        Chera Nadu (western)<br/>
        Chola Nadu (central)<br/>
        Pandya Nadu (south)<br/>
        Pallava Nadu (north)<br/>
        Vada Nadu (northern India)<br/>
        Vinnulaga Divya Desams (celestial)</p>
        <div className="grid-container">
            <div className="grid-item" id="myBtn" onClick={() => toggleFlag(0)}>
                <img src={require("./resources/divyadesam_images/Srirangam14.jpg")} alt="1"/>
                <p>Ranganathaswamy Temple</p>
                <p>Location: Srirangam, Trichy district, Tamil Nadu</p>
            </div>
            <div className="grid-item" id="myBtn" onClick={() => toggleFlag(1)}>
                <img src={require("./resources/divyadesam_images/Nachiyar4.jpg")} alt="1"/>
                <p>Thirukoḻi</p>
                <p>Location: Uraiyur, Trichy district, Tamil Nadu</p>
            </div>
            
        </div>
      </div>
  );
    return myElement;
};


export default Divyadesangal;