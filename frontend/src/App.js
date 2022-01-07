import LoginFormPage from './components/LoginFormPage';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<h1>Hello from App</h1>
				</Route>
				<Route path="/login">
					<LoginFormPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
