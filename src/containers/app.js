import {h, Component} from 'preact';
import {Provider} from 'preact-redux';
import Store from '../store/store-index';

const store = Store;

export default class App extends Component {
	render(props, state) {
		return (
			<Provider store={store}>
				<div class="main-container">
					{props.children}
				</div>
			</Provider>
		);
	}
}
