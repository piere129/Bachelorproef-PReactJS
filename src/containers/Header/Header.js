import {Component} from 'preact';
import {Link} from 'react-router-dom';
import './Header.css';
import {connect} from "preact-redux";

class HeaderComponent extends Component {

	render(props, state) {

        const {username} = this.props;

		return (
			<div class="header">
				<div class="header-container">
					<Link to="/home" class="logo">home</Link>
                    {  this.props.username != "" ?
                        <div class="link">
                            Welkom {username}!
                        </div> : null
                    }
					<div class="header-right">
                        {  this.props.username != "" ? null :
                            <div>
                                <Link to="/login" class="link">login</Link>
                                <Link to="/register" class="link">register</Link>
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