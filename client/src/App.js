import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Public from './components/public';
import ValueBets from './components/valuebets';
import MainHome from './components/Home';
import Pricing from './components/pricing';
import SureBet from './components/sureBet';

class App extends Component {
    render() {
        return (
            <div className="">
                <Switch>
                    <Route path="/public" component={Public} />
                    <Route path="/valuebets" component={ValueBets} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/bet" component={SureBet} />
                    <Route path="/" component={MainHome} />
                </Switch>
            </div>
        );
    }
}

export default App;
