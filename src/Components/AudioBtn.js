import React, {useState} from 'react';
import './AudioBtn.css'
import { ReactComponent as SoundWave } from '../Assets/SoundWave.svg';
import { ReactComponent as Play} from '../Assets/Play.svg';
import { ReactComponent as Pause} from '../Assets/Pause.svg';
import SoundWaveGif from '../Assets/SoundWave.gif'
import { sound } from '../APIs';
import Ripples from 'react-ripples';


function AudioBtn(props) {

    const [audioState, setAudioState] = useState(true);

    const handleAudio = () => {
        
        sound.play();
        sound.on('end', function(){
            setAudioState(true)
        });

        setAudioState(false) 
    }

    return (
        <div className="AudioBtn">
            <div className='Effects' >
                <Ripples color={'rgba(0,0,0, 0.15)'}>
                    <div onClick={handleAudio} className="PlayPausePadding">
                        {audioState ? <Play/> : <Pause width="28"/>}
                    </div>
                </Ripples>
            </div>
            {/* <SoundWave width ="38"/> */}
            <img src={SoundWaveGif} alt = 'SoundWaveGifAnimation'/>
        </div>
    );
}

export default AudioBtn;