import React, { Component } from 'react';
import './App.css';
import Spinner from "./Loader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Spinner/>
      </div>
    );
  }
}

export default App;
