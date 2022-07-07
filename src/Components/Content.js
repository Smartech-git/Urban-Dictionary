import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as SoundWave } from '../Assets/SoundWave.svg';
import { ReactComponent as Play} from '../Assets/Play.svg';
import { ReactComponent as Pause} from '../Assets/Pause.svg';
import { ReactComponent as ThumbsUp } from '../Assets/ThumbsUp.svg';
import { ReactComponent as ThumbsDown } from '../Assets/ThumbsDown.svg';
import { ReactComponent as LineDirect } from '../Assets/LineDirect.svg'
import { ReactComponent as Write } from '../Assets/Write.svg';
import { ReactComponent as Calender } from '../Assets/Calender.svg';
import { getWordContents } from '../APIs';
import NotFoundDisplay from '../NotFoundDisplay';
import LoadingDisplay from '../LoadingDisplay';
import { actionTypes } from '../Reducer';
import reactStringReplace from 'react-string-replace';
import Ripples from 'react-ripples';
import { useStateValue } from '../StateProvider';
import "./Content.css"


function Contents(props) {
    const [audioState, setAudioState] = useState(true);
    const [state, dispatch] = useStateValue();
    const contentsRef = useRef();

    useEffect(()=> {document.getElementsByClassName(contentsRef.current.className)[0].scrollTop = 0;
    },[state.newContent]);

    const getWordMeaning = (text) => {

        const action = {
            type: actionTypes.setLoading,
            loading: true
        }
        dispatch(action);

        getWordContents(text)
        .then((res) => {

            const action = {
                type: actionTypes.setWordContent,
                wordContents: res
            }   
            dispatch(action);

            document.getElementsByClassName(contentsRef.current.className)[0].scrollTop = 0;

        })
        .catch((err)=> {

            const action = {
                type: actionTypes.setWordContent,
                wordContents: err.message
            }   
            dispatch(action);

            console.log(err.message);

        })
    }

    const ModifyText = (text) => {
        let modifiedText;

        //Customize parts of speech texts
        modifiedText = reactStringReplace(text, /((?<=\().*(?=\)))/g, (match, i) => (
          <span  key={i+ match} style={{ color: 'black' }}>{match}</span>
        ))

        //urban dictionary word meaning references
        modifiedText = reactStringReplace(modifiedText, /((?<=\[).*?(?=\]))/g, (match, i) => (
            <span className='ref' onClick={() => getWordMeaning(match)} key={i+match} style={{
                cursor: 'pointer',
            }}>{match}</span>
          ));
        
        //removing the square brackets around word references 
        modifiedText = reactStringReplace(modifiedText, /(\[|\])/g, (match, i) =>(''));

        return modifiedText
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
        <div ref={contentsRef} className='Content'>
            { 
                state.responseEmpty && state.loading === false ? (
                    <NotFoundDisplay/>
                ) : (
                    state.loading ? (
                        <LoadingDisplay/>
                    ) : (
                        state.wordContents.map((item, index) => {
                            return(
                                <div key={index} className='Content-renders'>
                                    <div className='ContentHeader'>
                                        <div className='HeaderLeft'>
                                            <span style={{marginBottom:"5px", maxWidth:'130px'}}>{item.word}</span>
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
                                        <div style={{width: '3px', backgroundColor: 'rgba(0,0,0, 0.6)', borderRadius: '6px', height: 'auto'}}></div>
                                        <div className='WordDefinitionContent'>
                                            <p>{ModifyText(item.definition)}</p>
                                        </div>
                                    </div>
                                    {
                                        item.example && (
                                            <div className='WordExample'>
                                                <div className='Example'>
                                                    <LineDirect width="70" height="30"/>
                                                    <span>Example</span>
                                                </div>
                                                <div className='Examples'>
                                                    <p>{ModifyText(item.example)}</p>
                                                </div>
                                            </div>
                                        )
                                    }
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
                    )
                )
            }
        </div>
    );
}

export default Contents; 