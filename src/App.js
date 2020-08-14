import React from 'react';
import './App.css';
import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;

const countDownDate = new Date("Oct 5, 2020 15:37:25").getTime();

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

function App() {
  return (
    <div className="bgimg">
      <div className="middle">
        <h1>COMING SOON</h1>
        <p>
        <Countdown date={countDownDate} renderer={renderer}
  />
        </p>
      </div>
      <div className="bottomleft">
        <p>Goutham Sidhardha</p>
      </div>
    </div>
  );
}

export default App;
