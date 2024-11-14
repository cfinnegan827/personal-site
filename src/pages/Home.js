import React, { useRef } from 'react';
import '../styles/Home.scss';
import '../styles/typing.scss'
import '../styles/Background_mp4.scss'

const Home = () => {
    const scrollContainer = useRef(null);
    const textRef = React.useRef(null);
    const handleScroll = () => {
        const container = scrollContainer.current;
        const sectionHeight = container.clientHeight;
        const scrollPosition = container.scrollTop;
  
        
    };

    return (
        <div
            ref={scrollContainer}
            onScroll={handleScroll}
            className="scroll-container">
            <div className="section video-background">
                <div className="video-background-container">
                    <video autoPlay muted loop>
                        <source src="/images/winter-bus-pixel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div ref={textRef} className="typing">
                    <h1>Welcome to My Portfolio Site!</h1>
                </div>
            </div>
            <div className="section">Section 2</div>
            <div className="section">Section 3</div>
        </div>
    );
}

export default Home;