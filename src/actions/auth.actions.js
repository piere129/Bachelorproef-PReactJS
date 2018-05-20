import { history } from '../routes';

export const login = values => dispatch => {

    dispatch({type: 'fetchUsername', res: values.username});
    history.push('/home');
};

