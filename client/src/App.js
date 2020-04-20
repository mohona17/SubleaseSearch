import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import SubtenantForm from "./views/Form/SubtenantForm"
import SubleaserForm from "./views/Form/SubleaserForm"
import Listings from "./views/Listings/Listings"
import Messages from "./components/Messages/Chat"
import MyListings from "./views/Listings/MyListings"
import Login from "./views/Login/Login"
import ProfileSubleaser from "./views/Profile/ProfileSubleaser"
import ProfileSubtenant from "./views/Profile/ProfileSubtenant"
import MyFavorites from "./views/MyFavorites/MyFavorites"
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <Route exact path="/ProfileSubleaser" component={ProfileSubleaser} />
        <Route exact path="/ProfileSubtenant" component={ProfileSubtenant} />
        <Route exact path="/MyFavorites" component={MyFavorites} /> 
        <Route component={NotFound} />
      </Switch>
    </div>
  );

}

export default App;
