import React, { useState, useEffect, useCallback } from 'react';
import { Player } from 'video-react';
import '../node_modules/video-react/dist/video-react.css';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import Options from './Components/Options';
import Answer from './Components/Answer';
import Description from './Components/Description';
import Control from '././Components/Control';
import data from './Data';
import video from './Video/movie.mp4';
import birds from './Picture/poster.jpg';

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
  const [sound] = useState(new Audio());

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
    switch (stage) {
      case 'game': {
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
              sound={sound}
             />
            <Description 
              number={number}
              choice={choice}
              bools={bools}
              sound={sound}
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
              score={score}
            />
          </main>
        );
      }

      case 'completed': {
        return (
          <main className="main__finish">
            <p className="main__text">Поздравляем, отличный результат!</p>
            <p className="main__result">{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</p>
            <Player
              className="main__movie"
              src={video}
              poster={birds}
              playsInline
            />
            <button
            className="main__continue"
              onClick={() => {
                setScore(0);
                setCount(6);
                setStage('game');
                setNumber(0);
                setBools(false);
                setSelect((prev) => new Set(prev.clear()));
                setResult((prev) => new Set(prev.clear()));
              }}
            >Попробовать еще раз</button>
          </main>
        )
      }

      default: {
        return (
          <main className="main__finish">
            <p className="main__text">Можно лучше!</p>
            <p className="main__result">{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</p>
            <button
              className="main__continue"
              onClick={() => {
                setScore(0);
                setCount(6);
                setStage('game');
                setNumber(0);
                setBools(false);
                setSelect((prev) => new Set(prev.clear()));
                setResult((prev) => new Set(prev.clear()));
              }}
            >Попробовать еще раз</button>
          </main>
        )
      }
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
