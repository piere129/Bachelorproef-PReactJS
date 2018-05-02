import {h, Component} from 'preact';
import {connect} from 'react-redux';
import RegisterUser from './Register';
import {registerNewUser} from "../../actions/actions";

export class RegisterWrapperComponent extends Component {

	render(props, state) {

		const {email, registerNewUser} = props;

		return (
			<div>
			<p> {email}</p>
			<RegisterUser onSubmit={registerNewUser}/>
			</div>
		);
	}

};

function mapStateToProps(state) {
	return {email: state.fetchEmailReducer.email};
}

function mapDispatchToProps() {
	return {registerNewUser};
}

const RegisterWrapper = connect(
	mapStateToProps,
	mapDispatchToProps()
)(RegisterWrapperComponent);

export default RegisterWrapper;
