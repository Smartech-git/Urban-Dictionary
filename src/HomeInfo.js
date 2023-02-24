import React from 'react';
import { ReactComponent as Searching } from './Assets/Searching.svg';
import './HomeInfo.css';
import { useStateValue } from './StateProvider';

function HomeInfo(props) {
    const [state, dispatch] = useStateValue()

    return (
        <div className='HomeInfo'>
            <div className={`HomeInfoContent IllustrativeSVG-${state.theme}`}>
                <Searching width= '190'/>
                <div className='HomeInfoText'>
                    <h1 style={{color: state.themeHue.base}}>No searched word</h1>
                    <p style={{color: state.themeHue.base}}>Searched word meanings will appear here.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeInfo;