import React, { useRef, useState } from 'react'
import style from './styles/soundbar.module.css'

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        <div className={style.Box} onClick={() => handleClick()}>
            <span style={{animationPlayState: click?"running": "paused"}} className={style.liness} click={click}/>
            <span style={{animationPlayState: click?"running": "paused"}} className={style.liness} click={click}/>
            <span style={{animationPlayState: click?"running": "paused"}} className={style.liness} click={click}/>
            <span style={{animationPlayState: click?"running": "paused"}} className={style.liness} click={click}/> 
            <span style={{animationPlayState: click?"running": "paused"}} className={style.liness} click={click}/>
  
 
            <audio src='/song2.mp3' ref={ref} loop />
        </div>
    )
}

export default SoundBar

// animation-play-state: ${props => props.click ? "running" : "paused"};
