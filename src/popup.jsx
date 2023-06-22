import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import './style.css';

const Popup = () => {
    const CoverLetters = [
        `Hi, I'm available. I think i can help you solve your problem perfectly`,
        `Hi, I'm available. I think i can help you finish it perfectly`,
    ];

    return (
        <div className="container">
            <h2>Cover Letter Tips</h2>
            <ul className="tips">
                {CoverLetters.map((item)=> {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    );
}
const container = document.getElementById('react-target')
createRoot(container).render(<Popup />)