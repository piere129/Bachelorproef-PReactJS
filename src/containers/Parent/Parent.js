import {h, Component} from 'preact';
import {connect} from 'react-redux';
import Header from '../Header/Header';

class ParentComponent extends Component {

	render(props,state) {
		return (
			<div>
				<Header/>
				{props.children}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};

}

function mapDispatchToProps() {
	return {
	};
}

const Parent = connect(
	mapStateToProps,
	mapDispatchToProps()
)(ParentComponent);

export default Parent;
