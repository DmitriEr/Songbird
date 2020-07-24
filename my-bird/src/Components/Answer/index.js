import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const commentObj = {
  time: 3,
  content: "string"
}

const Answer = () => (
  <div>
    <div className="answer__picture">
      <img src='bird.PNG' alt='bird' className="answer-img" />
    </div>
    <div className="answer__name">
      ******
    </div>
    <div className="answer__speech">
      <ReactAudioPlayer
        src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"
        autoPlay
        controls
      />
    </div>
    Answer
  </div>
)

export default Answer;