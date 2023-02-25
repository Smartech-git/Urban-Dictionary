import React, {useEffect, useState} from 'react';
import './Header.css'
import { ReactComponent as Settings} from '../Assets/Settings.svg';
import logo512 from '../Assets/logo512.png'
import Themeset from './ThemeSet/ThemeSet';
import { useStateValue } from '../StateProvider';
import Ripples from 'react-ripples';
import { showThemeComRef, setShowThemeComRef } from './ThemeSetMobile/ThemeSetMobile';

function Header() {

    const [state, dispatch] = useStateValue()
    const [time, setTime] = useState( new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));

    useEffect(() =>{
       let ID =  setInterval(()=>{
            setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
        }, 500);

        return(() => {
            clearInterval(ID)
        })
    })
     
    const handleShowThemeCom = () => {
        console.log("clicked")
        if(showThemeComRef === 'none'){
            setShowThemeComRef(true)
        } else {
          setShowThemeComRef((prev) => !prev)  
        }
    }

    return (
        <div className='Header' style={{backgroundColor: state.themeHue.primary}}>
            <div className='LogoContent'>
                <img src={logo512} alt="logo" />
                <h1 style={{color: state.themeHue.base}}>Urban Dictionary</h1>
            </div> 
            <div className='HeaderRight'>
                <div className='SettingsRipple'>
                    <Ripples color={'rgba(0,0,0, 0.15)'}>
                        <div onClick={handleShowThemeCom} style={{backgroundColor: state.themeHue.primary_light}} className={`SettingsIcon SettingsSVG-${state.theme}`}>
                            <Settings width="16"/>
                        </div>
                    </Ripples>
                </div>
                <Themeset/>
                <div style={{backgroundColor: state.themeHue.primary_light}} className='TimeDisplay'>
                    <span style={{color: state.themeHue.base}}>{time.toLocaleLowerCase()}</span>
                </div>
            </div>
           
        </div>
    );
}

export default Header;