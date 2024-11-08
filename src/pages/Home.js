import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div class="container">
      <div class="left">
        <h1>Hello, My name is Connor Finnegan. I am a third year undergraduate computer science student at the 
            University of Massachusetts Boston. My goal is to become a software engineer but I also have interest in embedded systems. I mainly
            program in python and javascript but I also have a good understanding of Java, C, and have little experience in assembly and some higher
            level languages such as Coq and Racket. I have used my coding skills to not only make projects but also in my hobbies, one of which is designing
            my own PCB boards for various projects such as small IOT projects and hopefully a succesful aeroponics system. I have experiecne using KiCad to create
            both the schematics and the PCB layout. Whilst also using various raspberry pi such as the pico and pico w, raspberry pi 4b, and rspberry pi zero which
            for various projects around my house. 
        </h1>
      </div>
      <div class="right-top"></div>
      <div class="right-bottom"></div>
    </div>
  );
}

export default Home;