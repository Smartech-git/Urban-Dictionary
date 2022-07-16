import React, {useState} from 'react';
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

    textValue = setValue;
    leftArrowSet = setLeftArrowActive;

    const historyNavAPICall = (param) => {
        if(state.loading === false){
            const action = {
                type: actionTypes.setLoading,
                loading: true
            }
            dispatch(action); 
    
            getWordContents(param)
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
                console.log(err.message)
            })
        }
    }

    const handleHistoryNav = (active, setActive, count, setCount) => {

        if(active && state.loading === false){
            count();

            searchedText = searchedWordArray[index];
            setValue(searchedWordArray[index]);
            historyNavAPICall(searchedWordArray[index]);

            if(index === 0){
                index = 0;
                setActive(false)
            }

            if(index === (searchedWordArray.length - 1)){
                setCount()
                setActive(false)
            }

            if(searchedWordArray.length > 1){
                leftArrowActive === false && setLeftArrowActive(true)
            }
            if(index < (searchedWordArray.length - 1)){
                rightArrowActive === false && setRightArrowActive(true)
            }
        }
    }

    const addtoHistory = (word) => {
        if(searchedWordArray.length > 0 && value){
            if(searchedWordArray[searchedWordArray.length - 1].replace(/\s+/g, '') !== word.replace(/\s+/g, '')){
                searchedWordArray.push(word);
                countSet()
            }
        } else {
            searchedWordArray.push(word);
        }
    }

    const search = () => {
        if(value){
            searchedText = value;
            if(leftArrowActive === false){
                searchedWordArray.length > 0 && setLeftArrowActive(true)
            }
            console.log(searchedWordArray)

            const action = {
                type: actionTypes.setLoading,
                loading: true
            }
            dispatch(action); 

            getWordContents(value)
            .then((res) => {
                res.length !== 0 && addtoHistory(value);
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
        
    }

    const enterKeyPressed = event => {

        if (event.key === 'Enter' && value) {
            searchedText = value;
            if(leftArrowActive === false){
                searchedWordArray.length > 0 && setLeftArrowActive(true)
            }

            const action = {
                type: actionTypes.setLoading,
                loading: true
            }
            dispatch(action);

            getWordContents(value)
            .then((res) => {
                res.length !== 0 && addtoHistory(value);
                console.log(searchedWordArray)
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
     }


    return (
            <div className="SearchBarContainer">
                <div className={`ArrowRipple ${leftArrowActive}`}>
                    <Ripples color={'rgba(0,0,0, 0.15)'}>
                        <div className="ArrowleftPadding" onClick={() =>{handleHistoryNav(leftArrowActive, setLeftArrowActive, countBackwards)}}>
                            <ArrowLeft width ='18'/>
                        </div>
                    </Ripples>
                </div>
                <div className="SearchBar">
                    <div className='BackgroundPadding'>
                        <WordLogo width="24px"/>
                    </div>
                    <input className='SearchInput' onKeyPress={enterKeyPressed} onChange={(e)=> setValue(e.target.value)} value={value} placeholder="Type any word here..."  spellCheck='false' type="text"/>
                    <div className='SearchRipple'>
                        <Ripples color={'rgba(0,0,0, 0.15)'}>
                            <div onClick={search} className='SearchButton'>
                                <TextSearch width="22px"/>
                                <span>Search</span>
                            </div>
                        </Ripples>
                    </div>
                </div>
                <div className={`ArrowRipple ${rightArrowActive}`}>
                    <Ripples>
                        <div className='ArrowrightPadding' onClick={() => {handleHistoryNav(rightArrowActive, setRightArrowActive, countForwards, countSet)}}>
                            <ArrowRight width="18"/>
                        </div>
                    </Ripples>
                </div>
            </div>
    )
}

export default SearchBar; 