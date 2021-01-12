import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


import { fetchMovies } from "../../redux/movies/movie.actions";
import MoviesList from "./moviesList";

class MoviesPage extends React.Component {

	constructor(props) {
		super();
		this.state = {
			filteredMovies: [],
			searchText: false
		}
	}

	componentDidMount() {
		this.props.dispatch(fetchMovies());
	}

	getMovieTitle(event) {
		const { moviesList } = this.props;
		this.setState({ searchText: event.target.value });
		let selectedMovies = [];

		if (event.target.value) {
			moviesList.forEach((movie) => {
				if (movie.Title.toString().toLowerCase().includes(event.target.value.toLowerCase())) {
					selectedMovies.push(movie);
				}
			}
			);
		} else {
			selectedMovies = []
		}
		this.setState({ filteredMovies: selectedMovies })

	}

	render() {
		const { error, loading, moviesList } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<div className="container-fluid">
				<h2>Movies Information</h2>
				<div className="form-group">
					<label>Title:</label>
					<input type="text" className="form-control" id="title" onChange={(event) => this.getMovieTitle(event)} />
					<div className="movieBtn">
						{ this.state.filteredMovies.length === 1 ? <button type="button" className="btn btn-link ">Delete Movie</button> : ""}
						<button type="button" className="btn btn-link addMovie" ><Link to="/addMovie" >Add Movie</Link></button>
					</div>
				</div>
				<div className="movie-list">
					
						
						{
							!this.state.searchText && moviesList.map((movie, i) => <MoviesList key={movie.Title + i} movie={movie}></MoviesList>)
						}
						{this.state.searchText && this.state.filteredMovies.length > 0 &&
							this.state.filteredMovies.map((movie, i) => <MoviesList key={movie.Title + i} movie={movie}></MoviesList>)
						}

						{this.state.searchText && !this.state.filteredMovies.length &&
							<div colspan="2">No results found</div>
						}

					</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	moviesList: state.movies.moviesInfo,
	loading: state.movies.pending,
	error: state.movies.error
});

export default connect(mapStateToProps)(MoviesPage);
