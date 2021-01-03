
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import React from 'react';
import HelloWorld from './HelloWorld.js';

function App() {
  return (
    <div className="App">
      {/* native nav */}
      <nav>
        <a className="link" href="/"> Home </a>
        <a className="link" href="HelloWorld"> Hello World </a>
      </nav>

      <Router>
        <Switch>
          {/* <Route path="/HelloWorld" component= {() => <HelloWorld name={"Sacha Durand"} /> }/> */}
          <Route path="/HelloWorld"> <HelloWorld name={"Sacha Durand"} /> </Route>
        </Switch>
      </Router>

      {/* BODY HOME PAGE */}

    </div>

    
  );
}


export default App;

// ( routing ) https://gist.github.com/siakaramalegos/df4620c52e829f6107c75d5c3f0ad7f5
