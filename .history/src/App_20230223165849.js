import './App.css'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import useSound from 'use-sound'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play,{pause, duration, sound}] = useSound("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")

  const playingButton = () => {
    if(isPlaying){
      pause()
      setIsPlaying(false)
    } else {
      play()
      setIsPlaying(true)
    } 
  }
  return (
    <div className="component">
      <h2>Playing now</h2>
      <img src="https://picsum.photos/200/300" alt="Imagen..." className="musicCover" />
      <div className="titleContainer">
        <h3 className="title">Led Zappelin</h3>
        <p className="subTitle">Whole Lotta Love</p>
        <div>
          <p>0:00</p>
          <p>7:00</p>
        </div> 
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{size:"3em", color:"#EF5C43"}}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {isPlaying ? (
          <button className="playButton">
            <IconContext.Provider value={{size:"3em", color:"#EF5C43"}}>
              <AiFillPauseCircle onClick={playingButton}/>
            </IconContext.Provider>
          </button>  
        ) : (
          <button className="playButton">
            <IconContext.Provider value={{size:"3em", color:"#EF5C43"}}>
              <AiFillPlayCircle onClick={playingButton}/>
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{size:"3em", color:"#EF5C43"}}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default App;
