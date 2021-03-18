import Home from './Home'
import About from './About'
import Events from './EventsPage'
import Event from './Event'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} /> 
      <Route exact path='/events' component={Events} /> 
      <Route exact path='/events/:event' component={Event} /> 
    </Switch>
  </BrowserRouter>
}

export default Wrap