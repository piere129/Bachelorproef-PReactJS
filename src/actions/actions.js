import {Datainitialiser} from '../data/DataInitialiser';

export const fetchAllProducts = () => dispatch => {

	let d = new Datainitialiser();
	console.log(d.products);

	dispatch({
		type: 'fetchAllProducts',
		res: d.products
	});
};

export const increaseAction = () => dispatch => {
	dispatch({type: 'increase'});
}

