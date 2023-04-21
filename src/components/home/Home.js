import React from 'react'
import "./Home.css"
import { Social } from "../home/widget/social/Social.js";
import { Data } from "../home/widget/data/Data.js";

export const Home = () => {
    return (
        <section className='home section' id='home'>
            <div className='home-container container grid'>
                <div className='home-content grid'>
                    <Social styleClassName="home-social" styleIconClassName="home-social-icon" />

                    <div className='home-img'></div>


                    <Data homeTitle="Pranav" homeSubtitle="Front-End Developer" homeDesc={`My name is Pranav. I'm a front-end developer based in Haryana, India. I am passionate about building cutting-edge and pixel perfect web pages.`} homeContactBtn="Contact Me" />
                </div>
            </div>
        </section>
    )
}