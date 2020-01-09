import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import { Mainpage, Poll } from 'pages';

//import Template from 'components/Template'
class App extends Component  {
  render() {
    return (
      <div>
      <Route exact path="/" component={Mainpage}/>
      <Switch>
         <Route path="/Poll/:name" component={Poll}/>
         <Route path="/Poll" component={Poll}/>
      </Switch>
  </div>
    );
  }
}

export default App;
