import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import './App.css'
import 'roboto-npm-webfont';

/*
	basename='/app/'
*/

function App() {

  return (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' render={(props) => <HomePage props={props}/>}/>
			<Route path='/characters/film/:id' render={(props) => <CharactersPage props={props}/>}/>
		</Switch>
	</BrowserRouter>
  );
}

export default App;