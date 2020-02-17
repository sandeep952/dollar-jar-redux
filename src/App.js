import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome'
import DollarJar from './Components/DollarJar/DollarJar'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/dollar-jar"
          component={DollarJar} />
      </Router>

    </div>
  );
}

export default App;
