import React, { useEffect } from 'react';
import data from '../../Data';
import { List } from 'antd';
import { QuestionCircleOutlined, CloseCircleOutlined, CheckSquareOutlined } from '@ant-design/icons';
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
  setCount 
}) => {
  const counter = () => {
    let click = count;
    click -= 1;
    setCount(click);
  }

  const playAudio = (ind) => {
    if (ind === random) {
      correctAudio.play();
    } else {
      errorAudio.play()
    }
  }

  useEffect(() => {
    if (choice === random && plusScore && count !== 6) {
      let scoreCount = score;
      scoreCount += count;
      setPlusScore(false)
      setScore(scoreCount);
      setCount(6);
      setResult((prev) => new Set(prev.add(choice)));
    }
  }, [choice, random, setScore, setCount, setResult, count, setPlusScore, plusScore])

  const showIcon = (value, text) => {
    switch(value) {
      case random: {
        return (
          <List.Item.Meta
            avatar={<CheckSquareOutlined style={{fill: "red"}} />}
            description={text}
          />
        )
      }
      default: {
        return (
          <List.Item.Meta
            avatar={<CloseCircleOutlined />}
            description={text}
          />
        )
      }
    }
  }

  return (
    <List className="options" size="small" bordered>
      {data[number].map((item, index) => {
        return (
          <List.Item
            key={item.name}
            className="options__value"
            style={{padding: "10px 10px"}}
            onClick={() => {
              setChoice(index);
              setBools(true);
              if (!select.has(index)) {
                counter();
              };
              playAudio(index);
              setSelect((prev) => new Set(prev.add(index)))
          }}>
            {select.has(index) ? showIcon(index, item.name) : 
              (
                <List.Item.Meta
                  avatar={<QuestionCircleOutlined />}
                  description={item.name}
                />
              )
            }
          </List.Item>
        )
      })}
    </List>
  )
}

export default Options;
