import React from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/paragraph.css";
import ReactGA from "react-ga4";

const FlexboxPage = (d, title) =>  {
    const [flag, setFlag] = useState(false);
    const [content, setContent] = useState(d(0)[0].split('\n'));
    const glosary = d(0)[1];
    const [subTitle, setSubTitle] = useState(glosary[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef(null);
    //Page view
    useEffect(() => {ReactGA.send({
        hitType: "pageview",
        page: title,
        title: title
    }); 
    console.log(title, " page rendered");}, []);
    
    //Event handlers
    const handleClick = (cat, l) => {
        ReactGA.event({
            category: cat,
            action: 'Click',
            label: l,
        });
        console.log(cat);
        console.log(l);
    };

    //scroll back to top
    useEffect(() => {
        if (contentRef.current) {
        contentRef.current.scrollTop=0;
    }
    }, [currentIndex]); 

    const addNewContent = (index, i) => {
        if(index>=0 && index<glosary.length){
            setSubTitle(glosary[index]);
            setContent(d(index)[0].split('\n'));
            setCurrentIndex(index);
            
        }
        if(i==="navButton"){
            handleClick("NavBtnClk", title.concat(": NavBtn clicked: ", glosary[index]));
        }
        else if(i==="glosaryLinks"){
            handleClick("GlsItmClk", title.concat(": Glosary item clicked: ", glosary[index]));
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
    const myElement =  (
    <div>
        <div className="title_container"><p className="menu" onClick={() => toggleMenu()}>☰</p><h1 className="title">{title}</h1></div>
        <div className="fcontainer">
            <div className={`items glosary ${flag ? "active" : ""}`}><h3>பொருளடக்கம்</h3>{glosary.map((item, index) => (
                <p key={index} className="glosary_items" onClick={() => {addNewContent(index, "glosaryLinks"); toggleMenu();}} >{item}</p>))}
            </div>
            <div ref={contentRef} className="items content">
                <center className="guidedMessage"><p><b>Click the ☰ to see all the contents</b></p></center>
                <div className="header">
                    <h3>{subTitle}</h3>
                    <div className="Navigation">
                        <p className="Previous" onClick={() => addNewContent(currentIndex-1, "navButton")}>⇦</p>
                        <p className="Next" onClick={() => addNewContent(currentIndex+1, "navButton")}>⇨</p><br/>
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
                    <p className="Previous" onClick={() => addNewContent(currentIndex-1, "navButton")}>⇦</p>
                    <p className="Next" onClick={() => addNewContent(currentIndex+1, "navButton")}>⇨</p>
                </div>
                <p><br/></p>
            </div>
        </div>
    </div>
);
return myElement;
};

export default FlexboxPage;
