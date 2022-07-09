import React from 'react';
import { ReactComponent as Searching } from './Assets/Searching.svg';
import './HomeInfo.css';

function HomeInfo(props) {
    return (
        <div className='HomeInfo'>
            <div className='HomeInfoContent'>
                <Searching/>
                <div className='HomeInfoText'>
                    <h1>No searched word</h1>
                    <p>Searched word meanings will appear here.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeInfo;