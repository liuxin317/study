import React, { Component } from 'react';
import HomePage from './views/HomePage';
import LoadIndex from './components/LoadIndex';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Store from './store/store';
import names from './actionTypeName/name';
import './style/css/common.css';

class App extends Component {
  render() {    
    return (
      <Router>
        <section className="box">
          <LoadIndex />
          <Route exact path="/" component={ HomePage } />
        </section>
      </Router>
    )
  }
}

export default App;
