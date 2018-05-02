import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Parent from './components/Parent/Parent';
import Tester from './components/test/test';

export const history = createBrowserHistory();

class AppRouteComponent extends Component {
	render(props, state) {
		return (
			<Router history={history}>
				<Switch>
					<Parent>
						<Switch>
							<Route exact path="/" component={Tester} />
							<Redirect to="/" />
						</Switch>
					</Parent>
				</Switch>
			</Router>
		);
	}
}

const Routes = connect(({}) => ({}))(AppRouteComponent);

export default Routes;
