import App from './components/app';
import './style';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

export default () => (
	<div id="outer">
		<App>
			<Routes />
		</App>
	</div>
);
