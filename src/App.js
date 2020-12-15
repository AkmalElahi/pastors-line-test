import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/sass/app.scss';
import USModal from './components/USModal';
import AllContactsModal from './components/AllContacts';
import Switch from 'react-bootstrap/esm/Switch';
import Home from './components/Home';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route component={Home} exact path='/' />
					<Route component={AllContactsModal} exact path='/all' />
					<Route component={USModal} exact path='/us' />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
