import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import data from '../../Data';
import play from '../../Picture/play-button.svg';
import pause from '../../Picture/pause-button.svg';
import plus from '../../Picture/plus.svg';
import minus from '../../Picture/minus.svg';

const Description = ({
  number,
  choice,
  bools,
  sound,
  togglePause,
  togglePlay,
  setTogglePause,
  setTogglePlay,
}) => {
  const [vol, setVol] = useState(1);

  useEffect(() => {
    const item = sound;
    item.volume = vol;
  }, [vol, sound]);

  const playActive = () => {
    const item = sound;
    item.src = data[number][choice].audio;
    item.play();
    setTogglePlay(true);
    setTogglePause(false);
  };

  const pauseActive = () => {
    const item = sound;
    item.src = data[number][choice].audio;
    item.pause();
    setTogglePlay(false);
    setTogglePause(true);
  };

  const plusActive = () => {
    if (vol <= 0.99) {
      const value = (vol + 0.01);
      setVol(value);
    }
  };

  const minusActive = () => {
    if (vol >= 0.01) {
      const value = (vol - 0.01);
      setVol(value);
    }
  };

  const Player = () => (
    <div
      className="description__player-wrapper"
    >
      <img
        src={play}
        alt="play"
        className="description__list-img"
        onClick={playActive}
        onKeyDown={playActive}
        hidden={togglePlay}
      />
      <img
        src={pause}
        hidden={togglePause}
        className="description__list-img"
        alt="pause"
        onClick={pauseActive}
        onKeyDown={pauseActive}
      />
      <div
        className="description__volume"
      >
        <img
          className="description__list-sound"
          alt="plus"
          src={plus}
          onClick={plusActive}
          onKeyDown={plusActive}
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
          onClick={minusActive}
          onKeyDown={minusActive}
        />
      </div>
    </div>
  );

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
                    Player(),
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
      );
    }
    return (
      <div>
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </div>
    );
  };

  return (
    <div className="description">
      {showBird()}
    </div>
  );
};

Description.propTypes = {
  number: PropTypes.number.isRequired,
  choice: PropTypes.number.isRequired,
  bools: PropTypes.bool.isRequired,
  sound: PropTypes.objectOf(PropTypes.any).isRequired,
  togglePause: PropTypes.bool.isRequired,
  togglePlay: PropTypes.bool.isRequired,
  setTogglePause: PropTypes.func.isRequired,
  setTogglePlay: PropTypes.func.isRequired,
};

export default Description;
