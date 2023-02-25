import React, {useState, useEffect} from 'react'
import './ThemeSetMobile.css'
import { useStateValue } from '../../StateProvider'
import {ReactComponent as AutoTheme}  from '../../Assets/autoTheme.svg'
import {ReactComponent as DarkTheme} from '../../Assets/darkTheme.svg'
import {ReactComponent as LightTheme} from '../../Assets/lightTheme.svg'
import { actionTypes } from '../../Reducer'
import { getSettings, setSettings, settings } from '../../APIs'
import { useThemeDetector } from '../../CustomHooks/useThemeDetector'

export let showThemeComRef;   // imported in src/Components/Header.js
export let setShowThemeComRef; // imported in src/Components/Header.js

export default function ThemeSetMobile() {
    const [state, dispatch] = useStateValue()
    const [themeValue, setThemeValue] = useState();
    const [showThemeCom, setShowThemeCom] = useState("none");
    const isDarkTheme = useThemeDetector();

    useEffect(() => {
        showThemeComRef = showThemeCom;
       setShowThemeComRef = setShowThemeCom;
    }, [])

    
    useEffect(() => {
        let settings = getSettings()
        setThemeValue(settings.theme)
    }, [getSettings()])

    const handleThemeSelect = (theme) => {

        if(theme === 'AUTO'){
            if(isDarkTheme){
                const action = {
                    type: actionTypes.setTheme,
                    theme: 'Dark'
                }
                dispatch(action);
            } else {
                const action = {
                    type: actionTypes.setTheme,
                    theme: 'Light'
                }
                dispatch(action); 
            }
            let newSettings = {
                ...settings,
                theme: "Auto"
            }
            setSettings(newSettings)
        }

        if(theme === 'DARK'){
            let newSettings = {
                ...settings,
                theme: "Dark"
            }
            setSettings(newSettings)
            const action = {
                type: actionTypes.setTheme,
                theme: 'Dark'
            }
            dispatch(action);
        }

        if(theme === 'LIGHT') {
            let newSettings = {
                ...settings,
                theme: "Light"
            }
            setSettings(newSettings)
            const action = {
                type: actionTypes.setTheme,
                theme: 'Light'
            }
            dispatch(action);
        }

    }

    return (
        <div onClick={() => setShowThemeCom(false)} className={`ThemeSetMobile ${showThemeCom === true ? 'ThemeSetMobileFadeUp': ''} ${showThemeCom === false ? 'ThemeSetMobileFadeDown': ''}`}>
            <div className='ThemeSetMobile-Content' style={{backgroundColor: state.themeHue.primary_light}}>
                <div  onClick={() => handleThemeSelect("AUTO")} className={`ThemeMobile-${themeValue === 'Auto'? "active" : "inActive"}-${state.theme} ThemeIcon-${state.theme}`}>
                    <AutoTheme width="18"/>
                    <p style={{color: state.themeHue.base}}>Auto</p>
                </div>
                <div  onClick={() => handleThemeSelect("DARK")} className={`ThemeMobile-${themeValue === 'Dark'? "active" : "inActive"}-${state.theme} ThemeIcon-${state.theme}`}>
                    <DarkTheme width="18"/>
                    <p style={{color: state.themeHue.base}}>Dark</p>
                </div>
                <div  onClick={() => handleThemeSelect("LIGHT")} className={`ThemeMobile-${themeValue === 'Light'? "active" : "inActive"}-${state.theme} ThemeIcon-${state.theme}`}>
                    <LightTheme width="18"/>
                    <p style={{color: state.themeHue.base}}>Light</p>
                </div>

            </div>
        </div>
    )
}
