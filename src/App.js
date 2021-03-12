import Home from './Home'
import About from './About'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} /> 
    </Switch>
  </BrowserRouter>
}

export default Wrap