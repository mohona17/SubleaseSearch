import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import SubtenantForm from "./views/Form/SubtenantForm"
import SubleaserForm from "./views/Form/SubleaserForm"
import Listings from "./views/Listings/Listings"
import Messages from "./components/Messages/Chat"

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: DUMMY_DATA
    }
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
           <Redirect to="/Home" />
          </Route>
          <Route exact path="/Subtenant" component={SubtenantForm} />    
          <Route exact path="/Subleaser" component={SubleaserForm} />
          <Route exact path="/Listings" component={Listings} />
          <Route exact path="/Messages" component={Messages} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
