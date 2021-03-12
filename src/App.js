import Home from './Home'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={Home} /> 
    </Switch>
  </BrowserRouter>
}

export default Wrap