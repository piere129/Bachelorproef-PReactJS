import {api} from '../api/api-manager';
import {auth} from '../services/AuthManager';
import {handleError} from './messages.actions';
import {history} from '../routes';

export const login = values => dispatch => {
	let request = {
		url: '/auth/local',
		method: 'POST',
		body: {
			identifier: values.identifier,
			password: values.passwordLogin
		}
	};

	api.request(request).then((response) => {
		auth.saveToken(response.body.user, response.body.jwt);
		dispatch({ type: 'IS_LOGGED_IN' });
		dispatch({ type: 'LOGIN_SUCCESS' });
		history.push('/home');
	}).catch(err => {
		dispatch(handleError(err));
	});

};

export const registerNewUser = values => dispatch => {
	let request = {
		url: '/auth/local/register',
		method: 'POST',
		body: values
	};

	api.request(request).then((response) => {
		dispatch({ type: 'REGISTER_SUCCESS' });
		history.push('/login');
	}).catch(err => {
		dispatch(handleError(err));
	});
};

export const logOut = () => dispatch => {
	auth.removeToken();
	dispatch({ type: 'IS_LOGGED_OUT' });
	history.push('/login');
};
