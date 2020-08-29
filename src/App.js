import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Fcomponent from './Fcomponent';
// import Ccomponent from './Ccomponent';
// import CCcomponent from './CCcomponent';
// import Menu from './Menu';

import Header from "./Component/Header"
function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Header />
      {/* <Fcomponent/>
      <Ccomponent/>
      <CCcomponent/>
      <Menu/>
        {  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
      </header>
    </div>
  );
}

export default App; 
