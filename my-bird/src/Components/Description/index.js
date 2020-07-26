import React from 'react';
import { List } from 'antd';
import data from '../../Data';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Description = ({ number, choice, bools }) => {

const showBird = (value) => {
  switch(value) {
    case true: {
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
                    <AudioPlayer
                      src={data[number][choice].audio}
                      autoPlay={false}
                      showJumpControls={false}
                      className="answer__audioplay"
                      style={{backgroundColor: '#fff', boxShadow: 'none'}}
                    />
                  ]
                }
              renderItem={item => <List.Item>{item}</List.Item>}
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
    }

    default: {
      return (
        <div>
          <p>Послушайте плеер.</p>
          <p>Выберите птицу из списка</p>
        </div>
      )
    }
  }
}

  return (
    <div className="description">
      {showBird(bools)}
    </div>
  )
}

export default Description;