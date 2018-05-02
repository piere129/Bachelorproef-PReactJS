import {h, Component} from 'preact';
import {Field, reduxForm} from 'redux-form';
import {validate, warn} from './Validator';
import RenderField from '../RenderField/RenderField';

const SyncValidationForm = props => {

	const {handleSubmit, submitting} = props;
	return (
		<div className="item-wrapper-form">
			<form onSubmit={handleSubmit}>
				<Field name="username" type="text" component={RenderField} label={'Username:'}/>
				<Field name="email" type="email" component={RenderField} label={'Email:'}/>
				<Field name="password" type="password" component={RenderField} label={'Password:'}/>
				<button className="form-button" type="submit" disabled={submitting}>{'Register'}</button>
			</form>
		</div>
	);
};

const RegisterUser = reduxForm(
	{form: 'create', validate, warn}
)(SyncValidationForm);

export default RegisterUser;
