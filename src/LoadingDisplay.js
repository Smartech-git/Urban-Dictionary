import React from 'react';
import './LoadingDisplay.css'

function LoadingDisplay(props) {
    return (
        <div className='LoadingDisplay'>
            <div className='Loading-animate'>
                <div className='point'></div>
                <div className='point'></div>
                <div className='point'></div>
                <div className='point'></div>
            </div> 
        </div>
    );
}

export default LoadingDisplay;