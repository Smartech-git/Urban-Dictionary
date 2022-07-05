import React, {useState} from 'react';
import { wordContents } from '../APIs';
import {ReactComponent as SoundWave } from '../Assets/SoundWave.svg';
import {ReactComponent as Play} from '../Assets/Play.svg';
import {ReactComponent as Pause} from '../Assets/Pause.svg';
import { ReactComponent as ThumbsUp } from '../Assets/ThumbsUp.svg';
import { ReactComponent as ThumbsDown } from '../Assets/ThumbsDown.svg';
import reactStringReplace from 'react-string-replace';
import Ripples from 'react-ripples';

import "./Content.css"

function Contents(props) {
    const [audioState, setAudioState] = useState(true);

    const ModifyText = (text) => {
        let modifiedText;

        //Customize parts of speech texts
        modifiedText = reactStringReplace(text, /((?<=\().*(?=\)))/g, (match, i) => (
          <span key={i+ match} style={{ color: 'black' }}>{match}</span>
        ))

        //urban dictionary word meaning references
        modifiedText = reactStringReplace(modifiedText, /((?<=\[).*?(?=\]))/g, (match, i) => (
            <span key={i+match} style={{ color: '#8B3DFF' }}>{match}</span>
          ));
        
        // modifiedText = modifiedText.replace(/(\[|\])/g, '');

        return modifiedText;
    }

    return (
        <div className='Content'>
           <div className='Content-renders'>
                <div className='ContentHeader'>
                    <div className='HeaderLeft'>
                        <span style={{marginBottom:"5px"}}>great</span>
                        <div className="AudioBtn">
                            <div className='Effects' style={{overflow:'hidden', borderRadius: '50%', width:'26px', height: '26px'}}>
                                <Ripples color={'rgba(0,0,0, 0.15)'}>
                                    <div onClick={()=>{ setAudioState((prev)=>!prev)}} className="PlayPausePadding">
                                        {audioState ? <Play/> : <Pause width="28"/>}
                                    </div>
                                </Ripples>
                            </div>
                            <SoundWave/>
                        </div>
                    </div>
                    <div className='HeaderRight'>
                        <div className="ThumbsPadding">
                            <ThumbsUp/>
                            <span>762</span>
                        </div>
                        <div className="ThumbsPadding">
                            <ThumbsDown/>
                            <span>295</span>
                        </div>
                    </div>
                </div>
                <div className='WordDefinition'>
                    <div className='WordDefinitionContent'>
                        <p>{ModifyText(wordContents[0].definition)}</p>
                    </div>
                </div>
                <div className='WordExample'>

                </div>

            </div> 
        </div>
    );
}

export default Contents;