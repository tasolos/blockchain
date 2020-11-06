import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Register } from './Register';
import { Login } from './Login';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar';
import Web3 from 'web3';




function App() {
  window.web3 = new Web3(window.web3.currentProvider);
  return (
    <React.Fragment>
    <Router>
     <NavigationBar />
     <Sidebar />
   <Switch>
     <Route exact path="/Register" component={Register} />
     <Route path="/Login" component={Login} />
     <Route component={NoMatch} />
   </Switch>
    
</Router>
</React.Fragment>
  
  );
}

export default App;
