import {h, Component} from 'preact';
import {Link} from 'react-router-dom';
import './Header.css';

class HeaderComponent extends Component {

	render(props, state) {
		return (
			<div class="header">
				<div class="header-container">
					<Link to="/home" class="logo">home</Link>
					<div class="header-right">
						<Link to="/login" class="link">login</Link>
						<Link to="/register" class="link">register</Link>
					</div>
				</div>
			</div>
		);
	}
}

const Header =HeaderComponent;

export default Header;
