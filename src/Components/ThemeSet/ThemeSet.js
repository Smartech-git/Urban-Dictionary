import React, {useState, useEffect} from 'react'
import './ThemeSet.css'
import {ReactComponent as AutoTheme} from '../../Assets/autoTheme.svg'
import {ReactComponent as DarkTheme} from '../../Assets/darkTheme.svg'
import {ReactComponent as LightTheme} from '../../Assets/lightTheme.svg'
import {ReactComponent as DropDown} from '../../Assets/dropDown.svg'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../Reducer'
import { useThemeDetector } from '../../CustomHooks/useThemeDetector'
import { getSettings, setSettings } from '../../APIs'
import { settings } from 'firebase/analytics'

export default function Themeset() {
    
    const [state, dispatch] = useStateValue();
    const [showDropDown, setDropDown] = useState("none");
    const [themeValue, setThemeValue] = useState();
    const isDarkTheme = useThemeDetector();

    useEffect(() => {
        let settings = getSettings()
        setThemeValue(settings.theme)
    }, [getSettings()])

    const handleDropDown = () => {
        if(showDropDown === 'none'){
            setDropDown(true)
        } else {
          setDropDown((prev) => !prev)  
        }
    }

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

        setDropDown(false)
    }

    return (
        <div className='ThemeSet'>
            <div onClick={handleDropDown} className="ThemeSet-botton">
                <div className='ThemeIcon-botton'>
                    {themeValue === 'Auto' && <AutoTheme width="100%" height="fit-contentbn "/>}
                    {themeValue === 'Dark' && <DarkTheme width="100%" height="fit-contentbn "/>}
                    {themeValue === 'Light' && <LightTheme width="100%" height="fit-contentbn "/>}
                </div>
                <p>{themeValue}</p>
                <DropDown/>
            </div>
            <div className={`ThemeSet-dropMenu ${showDropDown === false ? 'dropDownReverseAnimate': ''} ${showDropDown === true ? "dropDownAnimate" : ''}`} style={{backgroundColor: state.themeHue.primary_light}}>
                <div onClick={() => handleThemeSelect("AUTO")} className={`ThemeAuto active`} style={{backgroundColor: state.themeHue.primary}}>
                    <AutoTheme/>
                    <p>Auto</p>
                </div>
                <div onClick={() => handleThemeSelect("DARK")}  className={`ThemeDark inActive`}>
                    <DarkTheme/>
                    <p>Dark</p>
                </div>
                <div onClick={() => handleThemeSelect("LIGHT")}  className={'ThemeLight inActive'}>
                    <LightTheme/>
                    <p>Light</p>
                </div>
            </div>
        </div>
    )
}
