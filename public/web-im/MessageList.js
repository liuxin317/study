import React from 'react';
import { Icon } from 'antd';
import messageIcon from '../style/images/message_icon.png';
import '../style/css/messageList.css';

class MessageList extends React.Component {
  render () {
    return (
      <div className="message-box">
        {
          this.props.messageList.length 
          ? 
          this.props.messageList.map((item, index) => {
            if (item.type === 'left') {
              return (
                <div key={index} className="message-group message-left">
                  <figure className="pull-left head-img">
                    <Icon type="user" />
                  </figure>
        
                  <div className="pull-left message-info">
                    <p className="user-info">{item.name} {item.date}</p>
                    <div className="message-value">
                      <img className="message-icon" src={ messageIcon } alt=""/>
                      <pre>{item.content}</pre>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              )
            } else {
              return (
                <div key={index} className="message-group message-right">
                  <figure className="pull-right head-img">
                    <Icon type="user" />
                  </figure>
        
                  <div className="pull-right message-info">
                    <p className="user-info">{item.name} {item.date}</p>
                    <div className="message-value">
                      <img className="message-icon" src={ messageIcon } alt=""/>
                      <pre>{item.content}</pre>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              )
            }
          })
          :
          ''
        }
      </div>
    )
  }
}

export default MessageList;
