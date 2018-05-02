import App from './components/app';
import Routes from './routes';
import './style';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tester from './components/test/test';
import Webstore from './components/webstore/webstore';

export default () => (
	<div id="outer">
			<App>
				<Webstore/>
			</App>
	</div>
);
