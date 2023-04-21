import "./Qualification.css"
import { Education } from "./education/Education.js";
import { Experience } from "./experience/Experience.js";
import React, { useState } from 'react';

export const Qualification = ({ title, subtitle, qualificationEdu, qualificationExp }) => {
    const [toggle, setToggle] = useState(false);

    return (<section className="qualification section" id="qualification">
        <h2 className="section-title">{title}</h2>
        <span className="section-subtitle">{subtitle}</span>

        <div className="qualification-container container">
            <div className="qualification-tabs">
                <div onClick={() => { setToggle(!toggle); }} className="qualification-btn btn-flex">
                    <i className="uil uil-briefcase-alt qualification-icon"></i>{qualificationExp}
                </div>

                <div onClick={() => { setToggle(!toggle); }} className="qualification-btn btn-flex">
                    <i className="uil uil-graduation-cap qualification-icon"></i>{qualificationEdu}
                </div>
            </div>

            <div className="qualification-sections">
                <div className="qualification-content">
                    {toggle ? <Education eduTimelineRound="round" eduTimelineLine="line" /> : <Experience expTimelineRound="round" expTimelineLine="line" />}
                </div>
            </div>
        </div>
    </section>)
}