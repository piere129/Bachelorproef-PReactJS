import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import './Header.css';
import {Link} from 'react-router-dom';

class HeaderComponent extends Component {

	history = () => {history.push('/tester');}

	render(props,state) {

		return (
			<div class="header">
				<Link to="/projects" class="logo">header.title</Link>
				<div class="header-right">
					<Link to="/login" class="link">header.logintest</Link>
					<Link to="/details" class="link">header.details</Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
}

function mapDispatchToProps() {
	return {};
}

const Header = connect(
	mapStateToProps,
	mapDispatchToProps()
)(HeaderComponent);

export default Header;
