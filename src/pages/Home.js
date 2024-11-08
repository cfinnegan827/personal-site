import React from 'react';
import './Home.scss';

function Home() {
    return (
        <div className="container">
            <div className="left">
                <h1>Hello, My name is Connor Finnegan. I am a third year undergraduate computer science student at the 
                    University of Massachusetts Boston. My goal is to become a software engineer but I also have interest in embedded systems. I mainly
                    program in python and javascript but I also have a good understanding of Java, C, and have little experience in assembly and some higher
                    level languages such as Coq and Racket. I have used my coding skills to not only make projects but also in my hobbies, one of which is designing
                    my own PCB boards for various projects such as small IOT projects and hopefully a succesful aeroponics system. I have experiecne using KiCad to create
                    both the schematics and the PCB layout. Whilst also using various raspberry pi such as the pico and pico w, raspberry pi 4b, and rspberry pi zero which
                    for various projects around my house. 
                </h1>
            </div>
            <div className="right-top">
                <h1>Contact Me:</h1>
                <div className='contact-links'>
                    <h2>From: Medford, Ma</h2>
                    <h2>Email: Cfinegan827@gmail.com</h2>

                    <a href='https://www.linkedin.com/in/connor-finnegan-50381b26a' target="_blank">
                        <img src='/images/linkedin.png' alt='linkedin-png' className='contact-logo'></img>
                    </a>

                    <a href='https://github.com/cfinnegan827' target='_blank'>
                        <img src='/images/github.png' alt='linkedin-png' className='contact-logo'></img>
                    </a>
                </div>
            </div>
            <div className="right-bottom">
                <h1>Files:</h1>
                <a href='/files/Resume.pdf' download={'Resume.pdf'} class="download-link"><h3>My Resume</h3></a>
                <a href='/files/10_year_boston_weather.csv' download={'10_year_boston_weather.csv'} class="download-link"><h3>A custom data made using meteo stat 
                    used in my machine learning model</h3></a>
            </div>
        </div>
    );
}

export default Home;