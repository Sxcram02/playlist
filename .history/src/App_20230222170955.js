import './App.css'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/ai'
import { IconContext } from 'react-icons'



function App() {
  return (
    <div className="component">
      <h2>Playing now</h2>
      <img src="https://picsum.photos/200/300" alt="Imagen..." className="musicCover" />
      <div>
        <h3 className="title">Led Zappelin</h3>
        <p className="subTitle">Whole Lotta Love</p>
      </div>
      <div>
        <button className="playButton">Back</button>
        <button className="playButton">Play</button>
        <button className="playButton">Forward</button>
      </div>
    </div>
  );
}

export default App;
