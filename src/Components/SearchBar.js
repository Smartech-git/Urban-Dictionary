import React, {useEffect} from 'react';
import './SearchBar.css';
import {ReactComponent as WordLogo} from '../Assets/Microsoft-word-logo.svg';
import {ReactComponent as TextSearch} from '../Assets/Text-search.svg';
import Ripples from 'react-ripples';
import { getWordContents } from '../APIs';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../Reducer'


function SearchBar(props) {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        getWordContents('emeka')
        .then((res) => {
            const action = {
                type: actionTypes.setWordContent,
                wordContents: res
            }
            console.log(res)    
            dispatch(action);
        })
        .catch((err)=> console.log(err))
        // console.log(state)
    },[])

    return (
        <div className="SearchBar">
            <div className='BackgroundPadding'>
                <WordLogo width="24px"/>
            </div>
            <input className='SearchInput' placeholder="Type any word here..."  spellCheck='false' type="text"/>
            <div style={{borderRadius: 50, overflow: "hidden", margin:"0 5px 0 12px"}}>
                <Ripples color={'rgba(0,0,0, 0.15)'}>
                    <div className='SearchButton'>
                        <TextSearch width="22px"/>
                        <span style={{marginBottom: "2px"}}>Search</span>
                    </div>
                </Ripples>
            </div>
        </div>
    );
}

export default SearchBar; 