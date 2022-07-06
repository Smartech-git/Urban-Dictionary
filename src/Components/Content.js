import React, {useState, useEffect} from 'react';
import {ReactComponent as SoundWave } from '../Assets/SoundWave.svg';
import {ReactComponent as Play} from '../Assets/Play.svg';
import {ReactComponent as Pause} from '../Assets/Pause.svg';
import { ReactComponent as ThumbsUp } from '../Assets/ThumbsUp.svg';
import { ReactComponent as ThumbsDown } from '../Assets/ThumbsDown.svg';
import { ReactComponent as LineDirect} from '../Assets/LineDirect.svg'
import {ReactComponent as LineDirectV} from '../Assets/LineDirectV.svg';
import {ReactComponent as Write} from '../Assets/Write.svg';
import {ReactComponent as Calender} from '../Assets/Calender.svg';
import reactStringReplace from 'react-string-replace';
import Ripples from 'react-ripples';
import { useStateValue } from '../StateProvider';
import "./Content.css"


function Contents(props) {
    const [audioState, setAudioState] = useState(true);
    const [state, dispatch] = useStateValue();

    console.log(state)
    const ModifyText = (text) => {
        let modifiedText;

        //Customize parts of speech texts
        modifiedText = reactStringReplace(text, /((?<=\().*(?=\)))/g, (match, i) => (
          <span key={i+ match} style={{ color: 'black' }}>{match}</span>
        ))

        //urban dictionary word meaning references
        modifiedText = reactStringReplace(modifiedText, /((?<=\[).*?(?=\]))/g, (match, i) => (
            <span onClick={()=>{console.log('goooo')}} key={i+match} style={{ color: '#8B3DFF', cursor: 'pointer' }}>{match}</span>
          ));
        
        //removing the square brackets around word references 
        modifiedText = reactStringReplace(modifiedText, /(\[|\])/g, (match, i) =>(''));

        return modifiedText;
    }

    const ModifyDate = (date) => {
        let modifiedDate;
        //Modify date to preferred format
        reactStringReplace(date, /(.+(?=[T]))/g, (match, i) =>(
            modifiedDate = match
        ));
        modifiedDate = reactStringReplace(modifiedDate, /(\-)/g, () => (','));

        return (
            new Date(Date.UTC(parseInt(modifiedDate[0]), parseInt(modifiedDate[2]), parseInt(modifiedDate[4])))
            .toLocaleDateString(
                undefined, { year: 'numeric', month: 'long', day: 'numeric' }
            )
        )

    }
    return (
        <div className='Content'>
            {
                state.wordContents.map((item, index) => {
                    return(
                        <div key={index} className='Content-renders'>
                            <div className='ContentHeader'>
                                <div className='HeaderLeft'>
                                    <span style={{marginBottom:"5px"}}>{item.word}</span>
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
                                        <span>{item.thumbs_up}</span>
                                    </div>
                                    <div className="ThumbsPadding">
                                        <ThumbsDown/>
                                        <span>{item.thumbs_down}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='WordDefinition'>
                                <LineDirectV/>
                                <div className='WordDefinitionContent'>
                                    <p>{ModifyText(item.definition)}</p>
                                </div>
                            </div>
                            <div className='WordExample'>
                                <div className='Example'>
                                    <LineDirect width="70" height="30"/>
                                    <span>Example</span>
                                </div>
                                <div className='Examples'>
                                    <p>{ModifyText(item.example)}</p>
                                </div>
                            </div>
                            <div className='Footer'>
                                <div className='FooterContent'>
                                    <Write/>
                                    <span>{item.author}</span>
                                </div>
                                <div className='FooterContent'>
                                    <Calender/>
                                    <span>{ModifyDate(item.written_on)}</span>
                                </div>
                            </div>
                        </div>
                    ) 
                })
            }
        </div>
    );
}

export default Contents; 