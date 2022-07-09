import React, {useState} from 'react';
import './SearchBar.css';
import {ReactComponent as WordLogo} from '../Assets/Microsoft-word-logo.svg';
import {ReactComponent as TextSearch} from '../Assets/Text-search.svg';
import Ripples from 'react-ripples';
import { getWordContents} from '../APIs';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../Reducer'

export let searchedText;
export let textValue;

function SearchBar(props) {

    const [state, dispatch] = useStateValue();
    const[value, setValue] = useState('');

    textValue = setValue;

    const search = () => {
        if(value){
            searchedText = value;

            const action = {
                type: actionTypes.setLoading,
                loading: true
            }
            dispatch(action); 

            getWordContents(value)
            .then((res) => {
                console.log(res)
                // audio(res[0].sound_urls[0])
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

            const action = {
                type: actionTypes.setLoading,
                loading: true
            }
            dispatch(action);

            getWordContents(value)
            .then((res) => {
                // audio()
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
        <div className="SearchBar">
            <div className='BackgroundPadding'>
                <WordLogo width="24px"/>
            </div>
            <input className='SearchInput' onKeyPress={enterKeyPressed} onChange={(e)=> setValue(e.target.value)} value={value} placeholder="Type any word here..."  spellCheck='false' type="text"/>
            <div style={{borderRadius: 50, overflow: "hidden", margin:"0 5px 0 12px"}}>
                <Ripples color={'rgba(0,0,0, 0.15)'}>
                    <div onClick={search} className='SearchButton'>
                        <TextSearch width="22px"/>
                        <span style={{marginBottom: "2px"}}>Search</span>
                    </div>
                </Ripples>
            </div>
        </div>
    );
}

export default SearchBar; 