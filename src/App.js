import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/about' exact>
					<About />
				</Route>
				<Route path='/contact' exact>
					<Contact />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
export default App;