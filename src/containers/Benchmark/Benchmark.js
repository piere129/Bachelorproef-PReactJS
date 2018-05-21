import {Component} from 'preact';
import {connect} from 'preact-redux';
import {addItemToArray, removeItemFromArray} from "../../actions/actions";

export class BenchmarkComponent extends Component {

    addItemsToArray = () => {
        var i;
        for(i = 0; i<10000;i++){
            this.props.addItemToArray();
        }
    };

    removeItemFromArray = () => {
        var i;
        for(i = 0; i<10000;i++){
            this.props.removeItemFromArray();
        }
    }


    render() {

        const {array} = this.props;
        return (
            <div>
                <ol>
                    <p> Array starts here:</p>
                    {
                        array.map(item =>
                            <li> {item} </li>
                        )
                    }
                </ol>
                <button onClick={() => this.addItemsToArray()}> Start Adding Benchmark! </button>
                <button onClick={() => this.removeItemFromArray()}> Start Removing Benchmark! </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {array: state.fetchArrayReducer.array};

}

function mapDispatchToProps() {
    return {addItemToArray,
    removeItemFromArray};
}

const Benchmark = connect(
    mapStateToProps,
    mapDispatchToProps()
)(BenchmarkComponent);

export default Benchmark;
