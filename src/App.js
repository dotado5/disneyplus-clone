import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { 
  BrowserRouter as Router, 
  Switch,
  link,
  Route,
} from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
