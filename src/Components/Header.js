import React, {useEffect, useState} from 'react';
import './Header.css'
import { ReactComponent as Logo} from '../Assets/Logo.svg';

function Header() {
    const [time, setTime] = useState( new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));

    useEffect(() =>{
       let ID =  setInterval(()=>{
            setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
        }, 500);

        return(() => {
            clearInterval(ID)
        })
    })

    return (
        <div className='Header'>
            <div className='LogoContent'>
                <Logo height='100%'/>
                <h1>Urban Dictionary</h1>
            </div>
            <div className='TimeDisplay'>
                <span>{time.toLocaleLowerCase()}</span>
            </div>
        </div>
    );
}

export default Header;