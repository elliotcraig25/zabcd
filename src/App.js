import React, { Component } from 'react';
import './App.css';
import './Reset.css';
import {Provider} from 'react-redux';
import store from './Ducks/store';

import Header from './Components/Header/Header'
import Body from './Components/Body/Body'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='page_one'>
          <Header />
          <Body />
        </div>
      </Provider>
    );
  }
}

export default App;
