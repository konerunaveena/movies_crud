import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function UpdateMovie(props) {
    const [movieInfo, setMovieInfo] = useState("");
    /* Using axios */
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3001/moviesInfo?Title=` + props.match.params.Title,
            );
            setMovieInfo(result.data[0]);
        };
        fetchData();
    }, [ props.match.params.Title]);

    UpdateMovie =(movieData) =>{
        console.log(movieData);
    };

    return (

        { movieInfo } &&
        <div>
            <h6>Please Update Movie Information</h6>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" for="email">Title:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" placeholder="Enter Title" value={movieInfo.Title} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" for="gross">US_Gross:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="gross" placeholder="Enter US Gross" value={movieInfo.US_Gross} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" for="worldWideGross">Worldwide_Gross:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="worldWideGross" placeholder="Enter Worldwide Gross" value={movieInfo.Worldwide_Gross} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default" onClick={() => UpdateMovie(movieInfo)}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default UpdateMovie;