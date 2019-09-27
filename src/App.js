import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import NotFound from './container/error/NotFound'
import Auction from './component/Auction';
import Profile from './component/Profile';
import Login from './component/login/Login';
import Register from './component/registerLogin/Register';
import InsertAddress from './component/InsertAddress';
// import DepositBank from './component/DepositBank';
// import DepositBank2 from './component/DepositVisa2';
import DepositVisa from './component/DepositVisa';
import Withdraw from './component/Withdraw';
import MyAuction from './component/MyAuction';
import Favorites from './component/Favorites';
import Tracking from './component/Tracking';
import Search from './component/Search';
import Return from './component/Return';


class App extends Component {
  renderRouter(){
  return(
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/auction" component={Auction} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/address" component={InsertAddress} />
    <Route exact path="/deposit" component={DepositVisa} />
    <Route exact path="/withdraw" component={Withdraw} />
    <Route exact path="/user/auction" component={MyAuction} />
    <Route exact path="/user/favorites" component={Favorites} />
    <Route exact path="/user/tracking" component={Tracking} />
    <Route exact path="/user/return" component={Return} />
    <Route exact path="/search" component={Search} />
    {/* <Route path="/secret" component={SecretPage} /> */}
    <Route component={NotFound} />
    </Switch>
  )
}

  render() {
  return (
    <div>
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    </div>
    );
  }
}
export default App;
