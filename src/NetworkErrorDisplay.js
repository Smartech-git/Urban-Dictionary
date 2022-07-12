import React from 'react';
import './NetworkErrorDisplay.css'
import {ReactComponent as NoResults} from './Assets/NoResults.svg'

function NetworkErrorDisplay(props) {
    return (
        <div className="NetworkErrorDisplay">
            <div className='NetworkEDInnerContent'>
                <NoResults width= '270'/>
                <div className='NetworkEDInfo'>
                    <h1>No connection</h1>
                    <p>Please check your network connection and try again</p>  
                </div>  
            </div>
        </div>
    );
}

export default NetworkErrorDisplay;