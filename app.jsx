function Application() {
  return (
    <div className="application">
      <div className="header">
        <h1>Scorebord</h1>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Hugo Mandujano
          </div>

          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>

              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
