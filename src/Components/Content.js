import React, {useEffect, useRef, useState } from 'react';
import { ReactComponent as ThumbsUp } from '../Assets/ThumbsUp.svg';
import { ReactComponent as ThumbsDown } from '../Assets/ThumbsDown.svg';
import { ReactComponent as LineDirect } from '../Assets/LineDirect.svg';
import { ReactComponent as LineDirectS} from '../Assets/LineDirectS.svg'
import { ReactComponent as Write } from '../Assets/Write.svg';
import { ReactComponent as Calender } from '../Assets/Calender.svg';
import { getWordContents} from '../APIs';
import NotFoundDisplay from '../NotFoundDisplay';
import LoadingDisplay from '../LoadingDisplay';
import AudioBtn from './AudioBtn';
import { actionTypes } from '../Reducer';
import reactStringReplace from 'react-string-replace';
import { useStateValue } from '../StateProvider';
import { textValue, searchedText, searchedWordArray, leftArrowSet,countSet} from './SearchBar';
import "./Content.css"

export let setAudio; // imported in API.js
let textCon= '';  // used for conditional audio button rendering

function Contents(props) {
    const [state, dispatch] = useStateValue();
    const [audioBtn, setAudioBtn] = useState();
    const contentsRef = useRef();

    useEffect(() => {
        setAudio = setAudioBtn;
    }, [])
    
   

    useEffect(()=> { document.getElementsByClassName(contentsRef.current.className)[0].scrollTop = 0;
    },[state.newContent]);

    const addtoHistory = (word) => {
        if(searchedWordArray[searchedWordArray.length - 1].replace(/\s+/g, '') !== word.replace(/\s+/g, '')){
            searchedWordArray.push(word);
            countSet()
        } 
    }

    const getWordMeaning = (text) => {
        textValue(text)
        textCon = text
        leftArrowSet(true)
        addtoHistory(text)

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

        //urban dictionary word meaning references
        modifiedText = reactStringReplace(text, /((?<=\[).*?(?=\]))/g, (match, i) => (
            <span className={`ref ref-${state.theme}`} onClick={() => getWordMeaning(match)} key={i+match} style={{
                cursor: 'pointer',
            }}>{match}</span>
          ));

        //highlighting bracketed words
        modifiedText = reactStringReplace(modifiedText, /((?<=\().*?(?=\)))/g, (match, i) => (
        <span  key={i+ match} style={{ color: state.themeHue.base}}>{match}</span>
        ))
        
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
        <div ref={contentsRef} className={`Content ScrollBar${state.theme}`}>
            { 
                state.responseEmpty && state.loading === false ? (
                    <NotFoundDisplay/>
                ) : (
                    state.loading ? (
                        <LoadingDisplay/>
                    ) : (
                        state.wordContents.map((item, index) => {
                            return(
                                <div key={index} className='Content-renders' style={{borderColor: state.theme === 'Light' ? '#E5E5E5' : '#35323A'}}>
                                    <div className='ContentHeader'>
                                        <div className={`HeaderLeft HeaderLeftSVG-${state.theme}`}>
                                            <span style={{marginBottom:"5px", maxWidth:'200px'}}>{item.word}</span>
                                            {
                                                audioBtn && (
                                                    (item.word.toLowerCase().replace(/\s+/g, '') === textCon.toLowerCase().replace(/\s+/g, '')  || item.word.toLowerCase().replace(/\s+/g, '')  === searchedText.toLowerCase().replace(/\s+/g, '') ) && (
                                                        <AudioBtn/>
                                                    )
                                                )
                                            }
                                        </div>
                                        <div className='HeaderRight'>
                                            <div className="ThumbsPadding" style={{backgroundColor: state.themeHue.primary_light}}>
                                                <ThumbsUp/>
                                                <span>{item.thumbs_up}</span>
                                            </div>
                                            <div className="ThumbsPadding" style={{backgroundColor: state.themeHue.primary_light}}>
                                                <ThumbsDown/>
                                                <span>{item.thumbs_down}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='WordDefinition'>
                                        <div className={`VerticalLine VerticalLine-${state.theme}`}></div>
                                        <div className='WordDefinitionContent'>
                                            <p style={{color: state.themeHue.base}}>{ModifyText(item.definition)}</p>
                                        </div>
                                    </div>
                                    {
                                        item.example && (
                                            <div className='WordExample'>
                                                <div className={`Example ExampleSVG-${state.theme}`}>
                                                    <LineDirectS/>
                                                    <LineDirect width="70" height="30"/>
                                                    <span>Example</span>
                                                </div>
                                                <div className='Examples'>
                                                    <p style={{color: state.themeHue.base}}>{ModifyText(item.example)}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className='Footer'>
                                        <div className={`FooterContent FooterContentSVG-${state.theme}`} style={{borderColor: state.themeHue.secondary_light}}>
                                            <Write/>
                                            <span style={{color: state.themeHue.base}}>{item.author}</span>
                                        </div>
                                        <div className={`FooterContent FooterContentSVG-${state.theme}`}style={{borderColor: state.themeHue.secondary_light}}>
                                            <Calender/>
                                            <span style={{color: state.themeHue.base}}>{ModifyDate(item.written_on)}</span>
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