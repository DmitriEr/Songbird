import React, { useState, useEffect } from 'react';
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

const appraisal = {
  0: 'Очень плохо! Открой консоль - там правильные ответы!',
  1: 'Плохо, нужно больше времени проводить на природе!',
  2: 'Удоволетворительно, но можно лучше!',
  3: 'Не плохо. Попробуй ещё!',
  4: 'Хороший результат!',
  5: 'Отличный результат! Еще бы чуть-чуть...'
}

function App() {
  const [number, setNumber] = useState(0);
  const [choice, setChoice] = useState(-1);
  const [bools, setBools] = useState(false);
  const [random, setRandom] = useState(0);
  const [score, setScore] =  useState(0);
  const [result, setResult] = useState(new Set());
  const [select, setSelect] = useState(new Set());
  const [plusScore, setPlusScore] = useState(true);
  const [count, setCount] = useState(6);
  const [stage, setStage] = useState('game');
  const [sound] = useState(new Audio());
  const [togglePlay, setTogglePlay] = useState(false);
  const [togglePause, setTogglePause] = useState(true);
  const [consoleAnswer, setConsoleAnswer] = useState('');

  useEffect(() => {
    console.log(consoleAnswer);
  }, [consoleAnswer]);

  useEffect(() => {
    if (stage === 'game') {
      const rand = Math.random() * (5);
      const num = Math.floor(rand);      
      setRandom(num);
      setConsoleAnswer(data[number][num].name);
    }
  }, [number, setRandom, stage])

  const showtext = () => {
    if (score <= 5) {
      return appraisal[0];
    } else if (score > 5 && score <= 10) {
      return appraisal[1];
    } else if (score > 10 && score <= 15) {
      return appraisal[2];
    } else if (score > 15 && score <= 20) {
      return appraisal[3];
    } else if (score > 20 && score <= 25) {
      return appraisal[4];
    } else if (score > 25 && score <= 29) {
      return appraisal[5]
    }
  }

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
              setTogglePlay={setTogglePlay}
              setTogglePause={setTogglePause}
             />
            <Description 
              number={number}
              choice={choice}
              bools={bools}
              sound={sound}
              togglePlay={togglePlay}
              setTogglePlay={setTogglePlay}
              togglePause={togglePause}
              setTogglePause={setTogglePause}
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
            <p className="main__text">Поздравляем, уровень орнитолог пройден!</p>
            <p className="main__result">{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</p>
            <video
              className="main__movie"
              src={video}
              poster={birds}
              controls
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
            <p className="main__text">
              {showtext()}
            </p>
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
