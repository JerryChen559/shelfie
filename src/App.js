import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Form } from "./components/Form/Form";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          </a>
        </header>
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
