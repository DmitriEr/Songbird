import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import data from '../../Data';
import play from '../../Picture/play-button.svg';
import pause from '../../Picture/pause-button.svg';
import plus from '../../Picture/plus.svg';
import minus from '../../Picture/minus.svg';

const Description = ({ number, choice, bools, sound, togglePause, togglePlay, setTogglePause, setTogglePlay }) => {
  const [vol, setVol] = useState(1);

  useEffect(() => {
    sound.volume = vol;
  }, [vol, sound.volume])
  
  const Player = () => {
    return (
      <div
        className="description__player-wrapper"
      >
        <img
          src={play}
          alt="play"
          className="description__list-img"
          onClick={() => {
            sound.src = data[number][choice].audio;
            sound.play();
            setTogglePlay(true);
            setTogglePause(false);
          }}
          hidden={togglePlay}
        />
        <img
          src={pause}
          hidden={togglePause}
          className="description__list-img"
          alt="pause"
          onClick={() => {
            sound.src = data[number][choice].audio;
            sound.pause();
            setTogglePlay(false);
            setTogglePause(true);
          }}
        />
        <div
          className="description__volume"
        >
          <img
            className="description__list-sound"
            alt="plus"
            src={plus}
            onClick={() => {
              if (vol <= 0.99) {
                const value = (vol + 0.01);
                setVol(value);
              }
            }}
          />
          <span 
            className="description__list-number"
          >
            {Math.floor(vol * 100)}
          </span>
          <img
            src={minus}
            alt="minus"
            className="description__list-sound"
            onClick={() => {
              if (vol >= 0.01) {
                const value = (vol - 0.01);
                setVol(value);
              }
            }}
          />
        </div>  
      </div>
    )
  }

  const showBird = () => {
    if (bools) {
      return (
        <div className="description__bird">
           <div
            className="description__bird-view"
           >
            <div 
              className="description__bird-image"
              >
              <img 
                src={data[number][choice].image}
                alt={data[number][choice].name}
                className="description__bird-inner"
              />
            </div>
            <div 
              className="description__bird-data"
              >
              <List
                size="small"
                className="description__list"
                bordered
                dataSource={
                  [
                    data[number][choice].name, 
                    data[number][choice].species,
                    Player()
                  ]
                }
              renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </div>
          </div>
          <div
            className="description__bird-text"
          >
            <div>{data[number][choice].description}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <p>Послушайте плеер.</p>
          <p>Выберите птицу из списка</p>
        </div>
      )
    }
  }

  return (
    <div className="description">
      {showBird()}
    </div>
  )
}

export default Description;