import {h, Component} from 'preact';
import {connect} from 'react-redux';
import {increaseAction} from '../../actions/actions';
import './test.css';

class Test extends Component {
	render(props, state) {
		{
			const { count, increaseAction } = props;
			return (
				<div>
					<p id="test" class="h1">Value is:</p>
					<p> {count}</p>
					<p> Increase value with 1:</p>
					<button onClick={increaseAction}>Increase</button>
					<hr />
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		count: state.testReducer.count
	};
}

function

mapDispatchToProps() {
	return {
		increaseAction
	};
}

const
	Tester = connect(
		mapStateToProps,
		mapDispatchToProps()
	)(Test);

export default Tester;
