import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard/dashboard';

import MoviesPage from './components/Movies/moviesPage';
import AddMovie  from './components/Movies/addMovie';
import UpdateMovie  from './components/Movies/updateMovie';

class App extends React.Component{
		
	render(){
		return (
			<Router>
				<div className="wrapper">
  					<header className="header">
					  	<nav className="navbar navbar-expand-sm bg-light">
							<ul className="navbar-nav">
								<li className="nav-item"><Link className="nav-link" to={'/dashboard'}> Dashboard </Link></li>
								<li className="nav-item"><Link className="nav-link" to={'/movies'}>Movies</Link></li>
							</ul>
				  		</nav>
					</header>
					<div className="content">
				  	<Switch>
						<Route exact path='/dashboard' component={Dashboard} />
						<Route exact path='/movies' component={MoviesPage} />
						<Route exact path='/' component={MoviesPage} />
						<Route exact path='/addMovie' component={AddMovie} />
						<Route path="/movies/:Title" component={UpdateMovie} />
				 	</Switch>
					 </div>
				</div>
			</Router>
		);
	}
}

export default App;
