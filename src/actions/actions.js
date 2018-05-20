import {Datainitialiser} from '../data/DataInitialiser';
var d = new Datainitialiser();

export const fetchProductsByCategory = category => dispatch => {

    console.log(category);
    var products = d.getProductsFiltered(category);

    dispatch({
        type: 'fetchProductsByCategory',
        res: products
    });
};

