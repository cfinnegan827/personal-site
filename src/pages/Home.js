import React, { useRef } from 'react';
import '../styles/Home.scss';

const Home = () => {
    const scrollContainer = useRef(null);
  
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
            <div className="section">
                
            </div>
            <div className="section">Section 2</div>
            <div className="section">Section 3</div>
        </div>
    );
}

export default Home;