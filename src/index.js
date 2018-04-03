import App from './components/app';
import Routes from './routes';
import './style';
import Tester from './components/test/test';

export default () => (
	<div id="outer">
			<App>
				<Tester/>
			</App>
	</div>
);
