import React from 'react';
import Demo1 from "./components/Demo1/parent"
import Home from "./components/Home"
import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/demo1" component={ Demo1 }></Route>
      </Switch>
      
    </HashRouter>
  );
}

export default App;
