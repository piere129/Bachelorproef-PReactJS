import {h, Component} from 'preact';
import {Field, reduxForm} from 'redux-form';
import {validate, warn} from './Validator';
import RenderField from '../RenderField/RenderField';

const SyncValidationForm = props => {


	const {handleSubmit, submitting} = props;
	return (
		<div className="item-wrapper-form">
			<form onSubmit={handleSubmit}>
				<Field name="identifier" type="email" component={RenderField} label={'Email:'}/>
				<Field name="passwordLogin" type="password" component={RenderField} label={'Wachtwoord:'}/>
				<button className="form-button" type="submit" disabled={submitting}>{'Log In:'}</button>
			</form>
		</div>
	);
};

const LoginUser = reduxForm(
	{form: 'create', validate, warn}
)(SyncValidationForm);

export default LoginUser;
