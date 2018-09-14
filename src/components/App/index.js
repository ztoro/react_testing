import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro';


class App extends Component {
    state = {
        series: ["alma","körte"]
    }

    variable = "alma";

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zoli Teszt App</h1>
        </header>
          <Intro message="I'm General Kenobi"/>
          Series length: {this.state.series.length}
          {this.variable}
      </div>
    );
  }
}


// // Default App
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">Welcome to React</h1>
//                 </header>
//                 <p className="App-intro">
//                     To get started, edit <code>src/App.js</code> and save to reload.
//                 </p>
//             </div>
//         );
//     }
// }

export default App;
