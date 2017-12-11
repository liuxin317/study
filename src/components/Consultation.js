import React from 'react';
import { Link } from 'react-router-dom';
import '../style/css/consultation.css';
import { Icon } from 'antd';

class Consultation extends React.Component {
  backTop () { // 返回顶部;
    let mySwiper = this.props.swiper;
    mySwiper.slideTo(0, 1000);
  }

  render () {
    return (
      <aside className="consultation-fixed-right">
        <ol>
          <li>
            <a href="./web-im/index.html">
              <Icon type="message" /> 
              <span>在线咨询</span>
            </a>
          </li>
          <li><a href="javascript: ">
            <Icon type="phone" /> 
            <span>18200110585</span>
          </a></li>
          <li onClick={ this.backTop.bind(this) }><a href="javascript: ">
            <Icon type="rocket" /> 
            <span>返回顶部</span>
          </a></li>
        </ol>
      </aside>
    )
  }
}

export default Consultation;
