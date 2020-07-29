import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { QuestionCircleOutlined, CloseCircleOutlined, CheckSquareOutlined } from '@ant-design/icons';
import data from '../../Data';
import correct from '../../Audio/pronunciation_en_correct.mp3';
import error from '../../Audio/pronunciation_en_try_again.mp3';

const correctAudio = new Audio(correct);
const errorAudio = new Audio(error);

const Options = ({
  number,
  choice,
  setChoice,
  setBools,
  random,
  setScore,
  score,
  setResult,
  select,
  setSelect,
  plusScore,
  setPlusScore,
  count,
  setCount,
  sound,
  setTogglePlay,
  setTogglePause,
  setShowOther,
  showOther,
}) => {
  const counter = () => {
    let click = count;
    click -= 1;
    setCount(click);
  };

  const playAudio = (ind) => {
    if (showOther) {
      if (ind === random) {
        correctAudio.play();
      } else {
        errorAudio.play();
      }
    }
  };

  useEffect(() => {
    if (choice === random && plusScore && count !== 6) {
      let scoreCount = score;
      scoreCount += count;
      setPlusScore(false);
      setScore(scoreCount);
      setCount(6);
      setResult((prev) => new Set(prev.add(choice)));
      setShowOther(false);
    }
  }, [choice, random, setScore, setCount, setResult, count, setPlusScore, plusScore, setShowOther]);

  const showIcon = (value, text) => {
    switch (value) {
      case random: {
        return (
          <List.Item.Meta
            avatar={<CheckSquareOutlined />}
            description={text}
          />
        );
      }
      default: {
        return (
          <List.Item.Meta
            avatar={<CloseCircleOutlined />}
            description={text}
          />
        );
      }
    }
  };

  return (
    <List className="options" size="small" bordered>
      {data[number].map((item, index) => (
        <List.Item
          key={item.name}
          className="options__value"
          style={{ padding: '10px 10px' }}
          onClick={() => {
            setChoice(index);
            setBools(true);
            if (!select.has(index)) {
              counter();
            }
            playAudio(index);
            setSelect((prev) => new Set(prev.add(index)));
            if (sound.src.length !== 0) {
              sound.pause();
            }
            setTogglePause(true);
            setTogglePlay(false);
          }}
        >
          {select.has(index) ? showIcon(index, item.name)
            : (
              <List.Item.Meta
                avatar={<QuestionCircleOutlined />}
                description={item.name}
              />
            )}
        </List.Item>
      ))}
    </List>
  );
};

Options.propTypes = {
  number: PropTypes.number.isRequired,
  choice: PropTypes.number.isRequired,
  setChoice: PropTypes.func.isRequired,
  setBools: PropTypes.func.isRequired,
  random: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setResult: PropTypes.func.isRequired,
  select: PropTypes.instanceOf(Set).isRequired,
  setSelect: PropTypes.func.isRequired,
  plusScore: PropTypes.bool.isRequired,
  setPlusScore: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  sound: PropTypes.objectOf(PropTypes.any).isRequired,
  setTogglePlay: PropTypes.func.isRequired,
  setTogglePause: PropTypes.func.isRequired,
  setShowOther: PropTypes.func.isRequired,
  showOther: PropTypes.bool.isRequired,
};

export default Options;
