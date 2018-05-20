import {Component} from 'preact';
import {history} from '../../routes';
import './NotFoundPage.css';

export class NotFoundPageComponent extends Component {
	render(props, state) {
		return (
			<div class="align-center">
				<h3>The page you are trying to access does not exist!</h3>
                <a onClick={() => history.goBack()}>Go Back</a>
			</div>
		);
	}
}

const NotFoundPage = NotFoundPageComponent;

export default NotFoundPage;
