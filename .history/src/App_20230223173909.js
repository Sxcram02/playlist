import './App.css'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import useSound from 'use-sound'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState({min:"", sec:""})
  const [seconds, setSeconds] = useState(0)
  const [time, setTime] = useState({min:"",sec:""})


  const [play,{pause, duration, sound}] = useSound("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")

  useEffect(() => {
    const interval = setInterval(() => {
      if(sound){
        setSeconds(sound.seek([]))
        const min = Math.floor(sound.seek([]]))
      }
    },1000)
  }, [])
  
  useEffect(() => {
    console.log(duration)
    if(duration){
      const sec = duration / 1000
      const min = Math.floor(sec / 60)
      const secRemain = Math.floor(sec % 60)
      
      setTime({
        min: min,
        sec: secRemain
      })
    }
  }, [duration, isPlaying])
  
  
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
        <div className="time">
          <p>0:00</p>
          <p>{time.min}:{time.secRemain}</p>
        </div>
        <input type="range" /> 
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
