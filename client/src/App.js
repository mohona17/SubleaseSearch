import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Form from "./views/Form/Form"
import Listings from "./views/Listings/Listings"
import Messages from "./views/Messages/Messages"


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Form" component={Form} />
        <Route exact path="/Listings" component={Listings} />
        <Route exact path="/Messages" component={Messages} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
