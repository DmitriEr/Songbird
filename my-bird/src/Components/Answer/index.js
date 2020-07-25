import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Answer = () => (
  <div className="answer">
    <div className="answer__picture">
      <img src='bird.PNG' alt='bird' className="answer__picture-img" />
    </div>
    <div className="answer__name">
      ******
    </div>
    <div className="answer__speech">
        <AudioPlayer
        src="https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"
        className="answer__audioplay"
        style={{backgroundColor: '#fff', boxShadow: 'none'}}
      />
    </div>
  </div>
)

export default Answer;