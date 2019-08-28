import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import Sidebar from './containers/sidebar';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import Regis from './containers/regis';
import Profile from './containers/profil';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter className="App">
        <Route exact path="/" name="Login" component={Sidebar}/>
        <Route exact path="/register" name="regis" component={Regis}/>
        <Route exact path="/profile" name="profile" component={Profile}/>
      </BrowserRouter>
    );
  }
}

export default App;
