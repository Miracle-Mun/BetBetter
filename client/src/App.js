import React, { Component } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

import { connect } from 'react-redux'
import { history } from "./history"

import Public from './components/public';
import ValueBets from './components/valuebets';
import MainHome from './components/Home';
import Pricing from './components/pricing';
import SureBet from './components/sureBet';
import SignIn from './components/SignIn';

import {is_session} from './store/actions/usersActions';

const RequireAuth = (data) => {
    console.log('is_session',is_session())
    if (!is_session()) {
      return <Redirect to={'/signin'} />;
    }
    return data.children;
};

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route component={SignIn} path="/signin" />
                    <RequireAuth>
                        <Route component={MainHome} path="/" exact/>
                        <Route component={Public} path="/public"/>
                        <Route component={ValueBets} path="/valuebets"/>
                        <Route component={Pricing} path="/pricing"/>
                        <Route component={SureBet} path="/bet"/>
                    </RequireAuth>
                </Switch>
            </Router>
        );
    }
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.users.isAuthenticated
})
export default connect(mapStateToProps)(App);
