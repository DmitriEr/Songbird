import React from 'react';
import data from '../../Data';
import { List } from 'antd';
import { QuestionCircleOutlined, CloseCircleOutlined, CheckSquareOutlined } from '@ant-design/icons';


const Options = ({ number, choice, setChoice, setBools, random }) => {
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
            style={{padding: "20px 10px"}}
            onClick={() => {
              setChoice(index);
              setBools(true);
          }}>
            {choice === index ? showIcon(index, item.name) : 
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
