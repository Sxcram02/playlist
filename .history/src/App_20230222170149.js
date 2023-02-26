import './App.css';

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
        <button className="button">Back</button>
        <button>Play</button>
        <button>Forward</button>
      </div>
    </div>
  );
}

export default App;
