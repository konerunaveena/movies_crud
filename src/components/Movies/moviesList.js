import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import {deleteMovie} from '../../redux/movies/movie.actions';
import Movie from './movie';

const MoviesList = ({ movie }) =>{ 
	const { Title,Major_Genre} = movie;
	return(
		<div className="movie-container" >
		<Link to={`/movies/${Title}`}>
			<img alt="monster" height="180px" width="250px" src={`https://lh3.googleusercontent.com/proxy/lzDxLMbc3iVNb4Viva6-vrBrEpS4jgPUGY9tuiADb_zNtKBXDjPVjpqmp7wmAYxGmGXsTWgGZAzFD-ErN0Np2W__1ZmIXG4tdyTu9C5enJA1Mm_NsdyYPTi-mMwwnX46ug`}></img>
			<h6><Movie name="title" value={Title} /></h6>
			<p><b>Genre: </b><Movie name="genere" value={Major_Genre ? Major_Genre : "Not Specified"} /></p>
			
		</Link>
    </div>
	)
}

const mapDispatchToProps = dispatch =>({
    deleteMovie : movie => dispatch(deleteMovie(movie))
});

export default connect(null,mapDispatchToProps)(MoviesList);