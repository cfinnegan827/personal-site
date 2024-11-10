import React from 'react';
import 'react-ipynb-renderer/dist/styles/monokai.css';
import './Projects.scss';

function Projects() {
    return (
        <div className="container">
            <div className="left">
                <h1>Weather prediction machine learning model using tensorflow</h1>
            </div>
            <div className="right">
                <h1>RP2040 development board</h1>
            </div>
        </div>
    );
}

export default Projects;