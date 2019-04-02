import React, { Component } from "react";
import logo from "./samurai-agency.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            alt="samurai agency logo"
            className="samurai"
            height={400}
          />
        </header>
      </div>
    );
  }
}

export default App;
