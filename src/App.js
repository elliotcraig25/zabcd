import React, { Component } from 'react';
import './App.css';
import './Reset.css';

import Header from './Components/Header/Header'
import Body from './Components/Body/Body'

class App extends Component {
  render() {
    return (
      <div className='page_one'>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
