import React, { useState } from 'react';
import m from "./Data/divyadesam_data.js";
import data from './Data/temples.js';
import ReactGA from "react-ga4";

const Divyadesangal = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
  var [flag, setFlag] = useState(false);
  var [modalMessage, setModalMessage] = useState("");
  function toggleFlag(index) {
    if (flag === true) {
      setFlag(false);
    }
    else {
      setModalMessage(m(index-1));
      setFlag(true);
    }
  };
  const temples = data();
  //DOM
  const myElement = (
    <div>
        <div id="myModal" className={`modal ${flag ? "active" : ""}`} >
          <div className="modal-content">
            <span className="close" id="close" onClick={(i) => toggleFlag(i)}>&times;</span>
            <p className="modal_message">{modalMessage}</p>
          </div>
        </div>
        <h1>108 divya desangal</h1>
        <p>A Divya Desam (Sanskrit: दिव्यदेशम्, Tamil: திவ்ய தேசம்) or Vaishnava Divya Desam is one of the 108 Vishnu and Lakshmi temples that is mentioned in the works of the Alvars, the poet-saints of the Sri Vaishnava tradition.<br/>
        Of the 108 temples, 105 are in India, one is in Nepal, and the last two are believed to be outside the earth, in Tirupparkatal and Vaikuntham. In India, they are spread across the states of Tamil Nadu (84), Kerala (11), Andhra Pradesh (2), Gujarat (1), Uttar Pradesh (4), and Uttarakhand (3). Muktinath, Saligramam is the only Divya Desam in Nepal. The Divya Desams are revered by the 12 Alvars in the Naalayira Divya Prabandham, a collection of 4,000 Tamil verses. The Divya Desams follow either Tenkalai or Vadakalai modes of worship.<br/>
        The Divya Desams are classified into six regions:<br/>
        Chera Nadu (western)<br/>
        Chola Nadu (central)<br/>
        Pandya Nadu (south)<br/>
        Pallava Nadu (north)<br/>
        Vada Nadu (northern India)<br/>
        Vinnulaga Divya Desams (celestial)</p>
        <div className="grid-container">
            {temples.map((temple) => (
              <div key={temple.id} className="grid-item" id="myBtn" onClick={() => {toggleFlag(temple.id)}}>
                <div className="inner-grid">
                  <img src={temple.image_source} alt="1"/>
                  <div className="text_container">
                    <p className="desam_name">{temple.name}</p>
                    <p className="desam_loc">Location: {temple.location}</p>
                  </div>
                </div>
            </div>
            ))
          }
        </div>
      </div>
  );
    return myElement;
};


export default Divyadesangal;