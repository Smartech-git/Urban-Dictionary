import React, {useState} from 'react';
import './AudioBtn.css'
import { ReactComponent as SoundWave } from '../Assets/SoundWave.svg';
import { ReactComponent as Play} from '../Assets/Play.svg';
import { ReactComponent as Pause} from '../Assets/Pause.svg';
import SoundWaveGifLight from '../Assets/SoundWave-Light.gif'
import SoundWaveGifDark from '../Assets/SoundWave-Dark.gif'
import { useStateValue } from '../StateProvider';
import { sound } from '../APIs';
import Ripples from 'react-ripples';

function AudioBtn(props) {
    const [audioState, setAudioState] = useState(true);
    const [state, dispatch] = useStateValue()

    const handleAudio = () => {
        setAudioState(false) 
        sound.play();
        sound.on('end', function(){
            setAudioState(true) 
        });

        
    }

    return (
        <div className={`AudioBtn SoundWaveSVG-${state.theme}`} style={{backgroundColor: state.themeHue.primary_light}}>
            <div className='Effects' >
                <Ripples color={'rgba(0,0,0, 0.15)'}>
                    <div onClick={handleAudio} className={`PlayPausePadding PlayPauseSVG-${state.theme}`} style={{backgroundColor: state.themeHue.primary}}>
                        {audioState ? <Play/> : <Pause width="28"/>}
                    </div>
                </Ripples>
            </div>
            {state.theme === 'Light' ? 
                <img style={{ opacity: !audioState ? 1: 0}} src={SoundWaveGifLight} alt = 'SoundWaveGifAnimation'/> :
                <img style={{ opacity: !audioState ? 1: 0}} src={SoundWaveGifDark} alt = 'SoundWaveGifAnimation'/>
            }
             
            <SoundWave style={{opacity: audioState ? 1 : 0}}/>
            
        </div>
    );
}

export default AudioBtn;