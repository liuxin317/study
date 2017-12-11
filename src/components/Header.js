import React from 'react';
import '../style/css/header.css';
import Logo from '../style/images/logo.png';
import Logo2 from '../style/images/logo2.png';

export default class Header extends React.Component {
  render () {
    return (
     <header>
      <section className={ this.props.headSwitchStatus === 1 ? "head-top" : "head-top active" }>
        <div className="head-top-box">
          <a href="javascript: " className="pull-left"><img src={ Logo2 } /></a>
          <div className="pull-right head-navbar">
            <ul className="list-inline">
              <li>
                <a href="javascript: ">
                  <span className="s1">首页</span>
                  <span className="s2">首页</span>
                </a>
              </li>
              <li>
                <a href="javascript: ">
                  <span className="s1">服务</span>
                  <span className="s2">服务</span>
                </a>
              </li>
              <li>
                <a href="javascript: ">
                  <span className="s1">体验</span>
                  <span className="s2">体验</span>
                </a>
              </li>
              <li>
                <a href="javascript: ">
                  <span className="s1">案例</span>
                  <span className="s2">案例</span>
                </a>
              </li>
              <li>
                <a href="javascript: ">
                  <span className="s1">新闻</span>
                  <span className="s2">新闻</span>
                </a>
              </li>
              <li>
                <a href="javascript: ">
                  <span className="s1">关于</span>
                  <span className="s2">关于</span>
                </a>
              </li>
              <li>
                <a href="javascript: ">
                  <span className="s1">联络</span>
                  <span className="s2">联络</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </section>

      <section className={ this.props.headSwitchStatus === 2 ? "head-top-mode" : "head-top-mode active" }>
        <div className="head-top-box">
          <a href="javascript: " className="pull-left"><img src={ Logo } /></a>
          <div className="pull-right head-navbar head-mode-navbar">
          <ul className="list-inline">
            <li>
              <a href="javascript: ">
                <span className="s1">首页</span>
                <span className="s2">首页</span>
              </a>
            </li>
            <li>
              <a href="javascript: ">
                <span className="s1">服务</span>
                <span className="s2">服务</span>
              </a>
            </li>
            <li>
              <a href="javascript: ">
                <span className="s1">体验</span>
                <span className="s2">体验</span>
              </a>
            </li>
            <li>
              <a href="javascript: ">
                <span className="s1">案例</span>
                <span className="s2">案例</span>
              </a>
            </li>
            <li>
              <a href="javascript: ">
                <span className="s1">新闻</span>
                <span className="s2">新闻</span>
              </a>
            </li>
            <li>
              <a href="javascript: ">
                <span className="s1">关于</span>
                <span className="s2">关于</span>
              </a>
            </li>
            <li>
              <a href="javascript: ">
                <span className="s1">联络</span>
                <span className="s2">联络</span>
              </a>
            </li>
          </ul>
          </div>
          <div className="clear"></div>
        </div>
      </section>
     </header>
    )
  }
}
