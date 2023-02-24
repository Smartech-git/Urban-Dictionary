import React from 'react';
import './NotFoundDisplay.css';
import {ReactComponent as Done} from './Assets/Done.svg';
import {searchedText} from './Components/SearchBar';
import { useStateValue } from './StateProvider';

function NotFoundDisplay(props) {
    const [state, dispatch] = useStateValue();

    return (
        <div className="NotFoundDisplay">
            <div className='NotFoundDisplayContentsWrapper'>
                <div className={`NotFoundDisplayContent IllustrativeSVG-${state.theme}`}>
                    <Done width="190"/>
                    <div className='NotFoundDisplayText'>
                        <h1 style={{color: state.themeHue.base}}>Sorry, we couldn't find: <span style={{color: '#8B3DFF'}}>{searchedText}</span></h1>
                        <p style={{color: state.themeHue.base}}>There are no definitions for this word. Be the first to define it! </p>  
                    </div>  
                </div>
                <a style={{textDecoration: 'none'}} href ="https://www.urbandictionary.com/" rel="noreferrer" target="_blank">
                    <div className='LeadToUrbanDictionary'>
                        <span>Define it!</span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default NotFoundDisplay;