function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.PropTypes = {
  title: React.PropTypes.string.isRequired,
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        Hugo Mandujano
      </div>

      <div className="player-score">
        <div className="counter">
          <button className="counter-action decrement"> - </button>
          <div className="counter-score">
            58
          </div>
          <button className="counter-action increment"> + </button>
        </div>
      </div>
    </div>
  );
}

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        <Player />
      </div>
    </div>
  );
}

Application.PropTypes = {
  title: React.PropTypes.string,
};
Application.defaultProps = {
  title: "Scoreboard",
};

ReactDOM.render(<Application />, document.getElementById('container'));
