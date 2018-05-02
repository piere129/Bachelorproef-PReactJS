import React, {h, Component} from 'preact';
import {connect} from 'react-redux';
import {fetchAllProducts} from '../../actions/actions';
import Products from "../Products/Products";
import './Home.css';

export class HomeComponent extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchAllProducts();
	}

	render(props, state) {
		const {items} = props;

		return (
			<div className="wrapper">
				<div className="block">
					<h1>Products:</h1>
					<div className="btn-group" role="group" aria-label="Basic example">
						<p> Filter by category: </p>
						<button type="button" className="btn btn-secondary">Game</button>
						<button type="button" className="btn btn-secondary">Household</button>
						<button type="button" className="btn btn-secondary">Gadget</button>
						<button type="button" className="btn btn-secondary">Movie</button>
						<button type="button" className="btn btn-secondary">Laptops</button>
					</div>
				</div>
				<Products items={items} />
				<hr/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		items: state.fetchAllReducer.items,
	};
}

function mapDispatchToProps() {
	return {
		fetchAllProducts,
	};
}

const Home = connect(
	mapStateToProps,
	mapDispatchToProps()
)(HomeComponent);

export default Home;
