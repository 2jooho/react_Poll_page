import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import { Mainpage, Poll, Poll_page_2,Poll_page_3,Poll_page_4,Poll_page_5,Poll_page_6,Poll_page_7,last_page } from 'pages';

//import Template from 'components/Template'
class App extends Component  {
  render() {
    return (
      <div>
        <switch>
      <Route exact path="/" component={Mainpage}/>
      <Route path="/Poll" component={Poll}/>
      <Route path="/Poll_page_2" component={Poll_page_2}/>
      <Route path="/Poll_page_3" component={Poll_page_3}/>
      <Route path="/Poll_page_4" component={Poll_page_4}/>
      <Route path="/Poll_page_5" component={Poll_page_5}/>
      <Route path="/Poll_page_6" component={Poll_page_6}/>
      <Route path="/Poll_page_7" component={Poll_page_7}/>
      <Route path="/last_page" component={last_page}/>
      </switch>
  </div>
    );
  }
}

export default App;
