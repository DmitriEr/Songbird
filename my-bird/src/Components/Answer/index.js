import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import data from '../../Data';

const Answer = ({
  random,
  number,
  result,
}) => {
  const showCurrentImage = () => {
    if (result.has(random)) {
      return (
        <div className="answer__picture">
          <img
            src={data[number][random].image}
            alt={data[number][random].name}
            className="answer__picture-img"
          />
        </div>
      );
    }
    return (
      <div className="answer__picture">
        <img src="bird.svg" alt="bird" className="answer__picture-img" />
      </div>
    );
  };

  const showCurrentName = () => {
    if (result.has(random)) {
      return data[number][random].name;
    }
    return '******';
  };

  return (
    <div className="answer">
      {showCurrentImage()}
      <div className="answer__name">
        {showCurrentName()}
      </div>
      <div className="answer__speech">
        <AudioPlayer
          src={data[number][random].audio}
          className="answer__audioplay"
          style={{ backgroundColor: '#fff', boxShadow: 'none' }}
        />
      </div>
    </div>
  );
};

Answer.propTypes = {
  random: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  result: PropTypes.instanceOf(Set).isRequired,
};

export default Answer;
