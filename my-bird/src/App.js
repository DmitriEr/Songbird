import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import Options from './Components/Options';
import Answer from './Components/Answer';
import Description from './Components/Description';
import Control from '././Components/Control';
import data from './Data';

function App() {
  const [number, setNumber] = useState(0);
  const [choice, setChoice] = useState(-1);
  const [bools, setBools] = useState(false);
  const [random, setRandom] = useState(1);
  const [score, setScore] =  useState(0);
  const [result, setResult] = useState(new Set());
  const [select, setSelect] = useState(new Set());
  const [plusScore, setPlusScore] = useState(true);
  const [count, setCount] = useState(6);
  const [stage, setStage] = useState('game');

  const randomNumber = useCallback(() => {
    if (stage === 'game') {
      const rand = Math.random() * (data[number].length);
      return Math.floor(rand);
    }
  }, [number, stage]);

  useEffect(() => {
    if (stage === 'game') {
      setRandom(randomNumber());
    }
  }, [number, randomNumber, setRandom, stage])

  const gameProcess = () => {
    if (stage === 'game') {
      return (
          <main className="main">
            <Answer
              choice={choice}
              random={random}
              number={number}
              result={result}
            />
            <Options
              number={number}
              setChoice={setChoice}
              setBools={setBools}
              random={random}
              choice={choice}
              setScore={setScore}
              score={score}
              setResult={setResult}
              select={select}
              setSelect={setSelect}
              plusScore={plusScore}
              setPlusScore={setPlusScore}
              setCount={setCount}
              count={count}
             />
            <Description 
              number={number}
              choice={choice}
              bools={bools}
            />
            <Control
              choice={choice}
              random={random} 
              setNumber={setNumber}
              number={number}
              setBools={setBools}  
              result={result}
              setResult={setResult}
              setSelect={setSelect}
              setPlusScore={setPlusScore}
              setCount={setCount}
              setStage={setStage}
            />
          </main>
      );
    } else {
      return (
        <main className="main">
          <p>Поздравляем!</p>
          <p>{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</p>
          <button
            onClick={() => {
              setScore(0);
              setCount(6);
              setStage('game');
              setNumber(0);
              setBools(false);
              setSelect((prev) => new Set(prev.clear()));
              setResult((prev) => new Set(prev.clear()));
            }}
          >Попробывать еще раз</button>
        </main>
      )
    }
  }

return (
  <div className="wrapper">
    <Header
        number={number}
        score={score}
    />
    {gameProcess()}
  </div>
)  
}

export default App;
