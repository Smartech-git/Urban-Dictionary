import React, {useEffect} from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Content from './Components/Content';
import NetworkErrorDisplay from './NetworkErrorDisplay';
import { useStateValue } from './StateProvider';
import HomeInfo from './HomeInfo';
import LoadingDisplay from './LoadingDisplay';
import { actionTypes } from './Reducer';
import { getSettings } from './APIs';
import { useThemeDetector } from './CustomHooks/useThemeDetector';
import ThemeSetMobile from './Components/ThemeSetMobile/ThemeSetMobile';

function Home(props) {
    const [state, dispatch] = useStateValue();
    const isDarkTheme = useThemeDetector();

    useEffect(() =>{
        let settings = getSettings()
        console.log(settings)
        console.log(state)

        if(settings.theme === "Auto"){

            if(isDarkTheme){
                const action = {
                    type: actionTypes.setTheme,
                    theme: 'Dark'
                }
                dispatch(action);
            } else{
                const action = {
                    type: actionTypes.setTheme,
                    theme: 'Light'
                }
                dispatch(action); 
            }

        } else {
             const action = {
                type: actionTypes.setTheme,
                theme: settings.theme
            }
            dispatch(action);
        }

    }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', boxSizing: 'border-box', backgroundColor: state.themeHue.primary}}>
            <Header/>
            <SearchBar/>
            {   
                state.wordContents === 'Default state'? (
                    state.loading ? (
                        <LoadingDisplay/>
                    ) : (
                        <HomeInfo/>
                    )
                ) : (
                    state.wordContents === 'Network Error' || state.wordContents === 'timeout exceeded' ? (
                        state.loading ? (
                            <LoadingDisplay/>
                        ) : (
                            <NetworkErrorDisplay/>
                        )
                    ) : (
                        state.loading ? (
                            <LoadingDisplay/>
                        ) : (
                            <Content/>
                        )          
                    )
                )
            }
            <ThemeSetMobile/>
        </div>
    );
}

export default Home;