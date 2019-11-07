import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Popup from './Bootstrap';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Popup/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
