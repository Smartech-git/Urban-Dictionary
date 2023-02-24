import React from 'react';
import './NetworkErrorDisplay.css'
import {ReactComponent as NoResults} from './Assets/NoResults.svg'
import { useStateValue } from './StateProvider';

function NetworkErrorDisplay(props) {
    const [state, dispatch] = useStateValue();

    return (
        <div className="NetworkErrorDisplay">
            <div className={`NetworkEDInnerContent IllustrativeSVG-${state.theme}`}>
                <NoResults width= '190'/>
                <div className='NetworkEDInfo'>
                    <h1 style={{color: state.themeHue.base}}>No connection</h1>
                    <p style={{color: state.themeHue.base}}>Please check your network connection and try again</p>  
                </div>  
            </div>
        </div>
    );
}

export default NetworkErrorDisplay;