import {Component} from 'preact';
import RegisterUser from './Register';
import {registerNewUser} from "../../actions/actions";

export class RegisterWrapperComponent extends Component {

	render(props, state) {

		const {email, registerNewUser} = props;

		return (
			<div>
			<p> {email}</p>
			<RegisterUser />
			</div>
		);
	}

};

const RegisterWrapper = RegisterWrapperComponent;

export default RegisterWrapper;
