import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const genres = [ 
    { label: 'Action'}, 
    { label: 'Comedy'}, 
    { label: 'Drama'}, 
    { label: 'Thriller/Suspense'}, 
	{ label: 'Musical'},
	{ label: 'Others'} 
];
function Dashboard() {
	const [majorGenreList,setMajorGenreList] = useState("");
	const [genreVal,setGenreVal] = useState(genres[0].label);
	/* Using axios */
	useEffect(() => {
		(genreVal === 'Others') ? setGenreVal(null) :setGenreVal(genreVal);
		const fetchData = async () => {
			
			const result = await axios(
				`http://localhost:3001/moviesInfo?Major_Genre=`+genreVal,
			);
			
			setMajorGenreList(result.data.length);
		};
		fetchData();
	}, [genreVal]);
	const getGenreVal = (e) =>{
		setGenreVal(e.target.value);
	}
	return (
		<div>
			<div className="form-group">
				<label htmlFor="sel1">Select Major_Genre:</label>
				<select className="form-control" id="sel1" onChange={(e)=>getGenreVal(e)}>
					{genres.map((key) => <option key={key.label}>{key.label}</option>)}
				</select>
			</div>
			<h6> Number of movies by Major Genre {majorGenreList}</h6>
		</div>
	)
}

export default Dashboard;