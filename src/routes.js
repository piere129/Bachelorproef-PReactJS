import {h, Component} from 'preact';
import {connect} from 'react-redux';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './containers/Home/Home';
import Parent from './containers/Parent/Parent';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import RegisterWrapper from './containers/Register/RegisterWrapper';
import LoginWrapper from './containers/Login/LoginWrapper';

export const history = createBrowserHistory();

class AppRouteComponent extends Component {
	render(props, state) {
		return (
			<Router history={history}>
				<Switch>
					<Parent>
						<Switch>
							<Redirect exact from="/" to="/login"/>
							<Route exact path="/login" component={LoginWrapper}/>
							<Route exact path="/home" component={Home}/>
							<Route exact path="/register" component={RegisterWrapper}/>
							<Route path="/*" component={NotFoundPage}/>
						</Switch>
					</Parent>
				</Switch>
			</Router>
		);
	}
}

const Routes = connect(({}) => ({}))(AppRouteComponent);

export default Routes;
