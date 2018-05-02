import {h, Component} from 'preact';
import {connect} from 'react-redux';
import LoginUser from './Login';

export class LoginWrapperComponent extends Component {

	submitLogin = values => {

	};

	render(props, state) {
		return (
			<LoginUser onSubmit={this.submitLogin}/>
		);
	}

};

function mapStateToProps() {
	return {};
}

function mapDispatchToProps() {
	return {};
}

const LoginWrapper = connect(
	mapStateToProps,
	mapDispatchToProps()
)(LoginWrapperComponent);

export default LoginWrapper;
