var PLAYERS = [
  {
    name: "Hugo Mandujano",
    score: 24,
  },
  {
    name: "Jane Doe",
    score: 8,
  },
  {
    name: "N/A",
    score: 16,
  }
]

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
        {props.name}
      </div>

      <div className="player-score">
        <Counter score={props.score} />
      </div>
    </div>
  );
}

Player.PropTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score">
        {props.score}
      </div>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

Counter.PropTypes = {
  score: React.PropTypes.number.isRequired,
};

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        {props.players.map(function(player) {
          return <Player name={player.name} score={player.score} />
        })}
      </div>
    </div>
  );
}

Application.PropTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  })).isRequired,
};
Application.defaultProps = {
  title: "Scoreboard",
};

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));
