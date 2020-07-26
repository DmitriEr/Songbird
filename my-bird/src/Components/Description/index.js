import React from 'react';
import { List } from 'antd';
import data from '../../Data';

const Description = ({ number, choice, bools }) => {

  const Player = () => {
    return (
      <audio 
      controls
      className="description__list"
    >
      <source src={data[number][choice].audio} type="audio/mp3" />
    </audio>
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