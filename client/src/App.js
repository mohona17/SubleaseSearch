import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import SubtenantForm from "./views/Form/SubtenantForm"
import SubleaserForm from "./views/Form/SubleaserForm"
import Listings from "./views/Listings/Listings"
import MyListings from "./views/Listings/MyListings"
import Messages from "./views/Messages/Messages"
import Login from "./views/Login/Login"


const App = () => {
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
        <Route exact path="/MyListings" component={MyListings} />
        <Route exact path="/Messages" component={Messages} />
        <Route exact path="/Login" component={Login} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
