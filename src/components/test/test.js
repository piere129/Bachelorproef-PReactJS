import { h, Component } from 'preact';
import {connect} from 'preact-redux';
import {increaseAction} from '../../actions/actions';
import './test.css'

 class Test extends Component {
    render() {
        const { value,increaseAction } = this.props;
        return (
            <div>
            <p id="test" className="h1">Value is:</p>
            <p> {value}</p>
            <p> Increase value with 1:</p>
            <button onClick={increaseAction}>Increase</button>
            <hr/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    value: state.testReducer.count
  };
};

function mapDispatchToProps() {
  return {
    increaseAction
  };
}

const Tester = connect(
  mapStateToProps,
  mapDispatchToProps()
)(Test);

export default Tester;