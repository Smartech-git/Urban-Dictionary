import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import {ReactComponent as WordLogo} from '../Assets/Microsoft-word-logo.svg';
import {ReactComponent as TextSearch} from '../Assets/Text-search.svg';
import {ReactComponent as ArrowLeft} from '../Assets/ArrowLeft.svg';
import {ReactComponent as ArrowRight} from '../Assets/ArrowRight.svg';
import Ripples from 'react-ripples';
import { getWordContents} from '../APIs';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../Reducer'

export let searchedText; // imported in Content.js and NotFoundDisplay.js
export let textValue; // imported in Content.js

export let searchedWordArray = []; // imported in Content.js
export let leftArrowSet; // imported on Content.js
let index = 0

export function countSet(){index = searchedWordArray.length - 1} //imported in Content.js
export function countForwards(){ index ++ }
function countBackwards(){ index -- }

function SearchBar(props) {

    const [state, dispatch] = useStateValue();
    const [value, setValue] = useState('');
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(false);
    
    useEffect(() => {
         textValue = setValue;
         leftArrowSet = setLeftArrowActive;
    }, [])


    if(index === searchedWordArray.length - 1 && rightArrowActive === true){
        setRightArrowActive(false)
    }
    
    const addtoHistory = (word) => {
        if(searchedWordArray.length > 0 && value){
            if(searchedWordArray[searchedWordArray.length - 1].replace(/\s+/g, '') !== word.replace(/\s+/g, '')){
                searchedWordArray.push(word);
                console.log(searchedWordArray.length)
                if(leftArrowActive === false){
                    searchedWordArray.length >= 2 && setLeftArrowActive(true)
                }
                countSet()
            }
        } else {
            searchedWordArray.push(word);
        }
            
    }

    const handleAPICall = (param, addtoHistoryBool) => {
        const action = {
            type: actionTypes.setLoading,
            loading: true
        }
        dispatch(action); 

        getWordContents(param)
        .then((res) => {
            if(addtoHistoryBool && res.length !== 0){
                addtoHistory(value)
            }
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
            console.log(err.message)
        })
    }

    const handleHistoryNav = (active, count) => {

        if(active && state.loading === false){
            count();

            searchedText = searchedWordArray[index];
            setValue(searchedWordArray[index]);
            handleAPICall(searchedWordArray[index], false);

            if(index > 0){
                leftArrowActive === false && setLeftArrowActive(true)
            }else{
                setLeftArrowActive(false)
            }

            if(index < (searchedWordArray.length - 1)){
                rightArrowActive === false && setRightArrowActive(true)
            }else{
                setRightArrowActive(false)
            }
        }
    }

   

    const search = () => {
        if(value){
            searchedText = value;
            handleAPICall(value, true)
        }   
    }

    const enterKeyPressed = event => {
        if ( event.key === 'Enter' && value) {
            searchedText = value;
            handleAPICall(value, true)
        }
     }


    return (
            <div className="SearchBarContainer">
                <div className={`ArrowRipple ${leftArrowActive}`}>
                    <Ripples color={'rgba(0,0,0, 0.15)'}>
                        <div style={{backgroundColor: state.themeHue.primary_light}} className={`ArrowLeftPadding ArrowIcons-${state.theme}`} onClick={() =>{handleHistoryNav(leftArrowActive, countBackwards)}}>
                            <ArrowLeft width ='18'/>
                        </div>
                    </Ripples>
                </div>
                <div style={{backgroundColor: state.themeHue.primary_light}}  className="SearchBar">
                    <div style={{backgroundColor: state.themeHue.primary}} className={`BackgroundPadding SearchBarIcons-${state.theme}`}>
                        <WordLogo width="24px"/>
                    </div>
                    <input  style={{backgroundColor: state.themeHue.primary_light }}  className={`SearchInput PlaceHolder-${state.theme}`} onKeyPress={enterKeyPressed} onChange={(e)=> setValue(e.target.value)} value={value} placeholder="Type any word here..."  spellCheck='false' type="text"/>
                    <div className='SearchRipple'>
                        <Ripples color={'rgba(0,0,0, 0.15)'}>
                            <div onClick={search} className={`SearchButton SearchBarIcons-${state.theme}`} style={{backgroundColor: state.themeHue.primary}}>
                                <TextSearch width="22px"/>
                                <span style={{color: state.themeHue.base}}>Search</span>
                            </div>
                        </Ripples>
                    </div>
                </div>
                <div className={`ArrowRipple ${rightArrowActive}`}>
                    <Ripples>
                        <div style={{backgroundColor: state.themeHue.primary_light}}  className={`ArrowRightPadding ArrowIcons-${state.theme}`} onClick={() => {handleHistoryNav(rightArrowActive, countForwards)}}>
                            <ArrowRight width="18"/>
                        </div>
                    </Ripples>
                </div>
            </div>
    )
}

export default SearchBar; 
