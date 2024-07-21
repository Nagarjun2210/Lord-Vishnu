import React from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/paragraph.css";
const FlexboxPage = (d, title) => {
    var [flag, setFlag] = useState(false);
    var [content, setContent] = useState(d(0)[0].split('\n'));
    var glosary = d(0)[1];
    var [subTitle, setSubTitle] = useState(glosary[0]);
    var [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef(null);


        useEffect(() => {
          if (contentRef.current) {
            contentRef.current.scrollTop=0;
            console.log("scroll function");
            console.log(contentRef.current);
        }
        }, [currentIndex]); // Change 'count' to the state you want to watch

    const addNewContent = (index) => {
        if(index>=0 && index<glosary.length){
            setSubTitle(glosary[index]);
            setContent(d(index)[0].split('\n'));
            setCurrentIndex(index);
        }
    }
    const toggleMenu = () => {
        if (flag === true) {
            setFlag(false);
        }
        else {
            setFlag(true);
        }
    }
    const myElement = (
    <div>
        <div className="title_container"><p className="menu" onClick={() => toggleMenu()}>☰</p><h1 className="title">{title}</h1></div>
        <div className="fcontainer">
            <div className={`items glosary ${flag ? "active" : ""}`}><h3>பொருளடக்கம்</h3>{glosary.map((item, index) => (
                <p key={index} className="glosary_items" onClick={() => addNewContent(index)} >{item}</p>))}
            </div>
            <p ref={contentRef} className="items content">
                <div className="header">
                    <h3>{subTitle}</h3>
                    <div className="Navigation">
                        <p className="Previous" onClick={() => addNewContent(currentIndex-1)}>⇦</p>
                        <p className="Next" onClick={() => addNewContent(currentIndex+1)}>⇨</p><br/>
                    </div>
                </div>
                {content.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
                <br/>
                <div className="Navigation">
                    <p className="Previous" onClick={() => addNewContent(currentIndex-1)}>⇦</p>
                    <p className="Next" onClick={() => addNewContent(currentIndex+1)}>⇨</p>
                </div>
                <p><br/></p>
            </p>
        </div>
    </div>
);
return myElement;
};

export default FlexboxPage;
