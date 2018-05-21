import {Component} from 'preact';
import {Link} from 'react-router-dom';
import './Header.css';
import {connect} from "preact-redux";

class HeaderComponent extends Component {

	render(props, state) {

        const {username} = props;

		return (
			<div class="header">
				<div class="header-container">
					<Link to="/home" class="logo">Home</Link>
                    <Link to="/benchmark" class="link">Benchmark</Link>
                    {  props.username != "" ?
                        <div class="link">
                            Welkom {username}!
                        </div> : null
                    }
					<div class="header-right">
                        {  props.username != "" ? null :
                            <div>
                                <Link to="/login" class="link">Login</Link>
                                <Link to="/register" class="link">Register</Link>
                            </div>
                        }

					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        username: state.fetchLoginReducer.username,
    };
}

function mapDispatchToProps() {
}

const Header = connect(
    mapStateToProps,
    mapDispatchToProps()
)(HeaderComponent);

export default Header;