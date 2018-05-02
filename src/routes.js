import  {h, Component } from 'preact';
import { connect } from 'preact-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'preact-router-redux';

import Tester from './components/test/test';
import Webstore from './components/webstore/webstore';
import App from './components/app';

class AppRouteComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Tester} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        );
    }
}

const Routes = connect(({ }) => ({ }))(AppRouteComponent);

export default Routes;
