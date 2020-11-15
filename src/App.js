import React, {useState, useEffect} from 'react';

import './app.css';
import Timer from './Components/Timer';
import Button from './Components/Button';
import Input from './Components/Input';

function App() {
  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [minSec, setMinSec] = useState({min: 0, sec: 0});

  const setInput = e => {
    const minSecCopy = minSec;
    console.log(e.target.name);
    if(e.target.name === "min") setMinSec({min: Number(e.target.value), sec: minSecCopy.sec});
    else{
      const sec = Number(e.target.value) > 59 ? Number(e.target.value) % 60 : Number(e.target.value);
      const minPlus = Number(e.target.value) > 59 ? (Number(e.target.value)/60|0) : 0
      setMinSec({sec: sec, min: minSecCopy.min + minPlus});
    }
    console.log(minSec);
  }

  const setTimer = () => setTime(minSec.min * 60 + minSec.sec);

  const toggle = () => {
    setPlay(!play);
    setTimer();
  }

  useEffect(() => {
    if(play){
      const parar = () => clearInterval(interval);

      const interval = setInterval(() => {
        if(time > 0) setTime(time => time - 1);
        else parar();
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className="App">
      <div className="container">
        {!play ? 
          <Input definirTimer={setInput} sec={minSec.sec} min={minSec.min} /> :
          <Timer min={time/60|0} secs={time%60}/>
        }
        <Button toggle={toggle}>{`${play ? 'Parar' : 'Começar'}`}</Button>
      </div>
    </div>
  );
}

export default App;