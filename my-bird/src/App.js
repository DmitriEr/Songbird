import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import Options from './Components/Options';
import Answer from './Components/Answer';
import Description from './Components/Description';
import data from './Data';

function App() {
  const [number, setNumber] = useState(0);
  const [choice, setChoice] = useState(-1);
  const [bools, setBools] = useState(false);
  const [random, setRandom] = useState(1);

  const randomNumber = useCallback(() => {
    const rand = Math.random() * (data[number].length);
    return Math.floor(rand);
  }, [number]);

  useEffect(() => {
    setRandom(randomNumber());
  }, [number, randomNumber, setRandom])

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Answer />
        <Options
          number={number}
          setChoice={setChoice}
          setBools={setBools}
          random={random}
          choice={choice}
         />
        <Description 
          number={number}
          choice={choice}
          bools={bools}
        />
      </main>
    </div>
  );
}

export default App;
