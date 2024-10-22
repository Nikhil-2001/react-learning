import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
      <TimerChallenge title="Not Easy" targetTime={5}></TimerChallenge>
      <TimerChallenge title="Getting tough" targetTime={10}></TimerChallenge>
      <TimerChallenge title="Very Hard" targetTime={15}></TimerChallenge>
    </>
  );
}

export default App;
