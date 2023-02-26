import './App.css'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { IconContext } from 'react-icons'

const [isPlaying, setIsPlaying] = useState(false)

function App() {
  return (
    <div className="component">
      <h2>Playing now</h2>
      <img src="https://picsum.photos/200/300" alt="Imagen..." className="musicCover" />
      <div className="titleContainer">
        <h3 className="title">Led Zappelin</h3>
        <p className="subTitle">Whole Lotta Love</p>
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{size:"3em", color:"#EF5C43"}}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        <button className="playButton">
          <IconContext.Provider value={{size:"3em", color:"#EF5C43"}}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </button>
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
