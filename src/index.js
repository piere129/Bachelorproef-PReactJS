import App from './containers/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import './index.css';

export default () => (
	<div id="outer">
		<App>
			<Routes />
		</App>
	</div>
);
