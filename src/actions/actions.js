import {Datainitialiser} from '../data/DataInitialiser';

var data = new Datainitialiser();

export const increaseAction = () => ({ type: 'increase' });

export const fetchAllProducts = () => dispatch => {
        dispatch({
            type: 'fetchAllProducts',
            res: data.products
        });  
};