import logo from './logo.svg';
import './App.css';
import React from 'react';
import Menu from './components/MenuComponent'
import { DISHES } from './shared/dishes';


import { Navbar, NavbarBrand } from 'reactstrap';

import Main from './components/MainComponent';
 
class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}



export default App;