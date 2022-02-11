import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
