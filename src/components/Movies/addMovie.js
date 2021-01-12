import React from 'react';

class AddMovie extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Title: '',
			Release_Date: '',
			Major_Genre: '',
			titleErrorMessage:'',
			releaseDateErrorMessage:'',
			majorGenreErrorMessage:'',
			color : "red",
			errorMessage: {
				titleErrorMessage: '',
				releaseDateErrorMessage: '',
				majorGenreErrorMessage:''
			}
		};
		
		 this.submitMovie = this.submitMovie.bind(this);
	}
	
	submitMovie(event){
		event.preventDefault();
		const {Title,Release_Date,Major_Genre } = event.target.elements;
		const formData = ({
				"Title": Title,
				"US_Gross": 10876,
				"Worldwide_Gross": 10876,
				"US_DVD_Sales": null,
				"Production_Budget": 300000,
				"Release_Date": Release_Date,
				"MPAA_Rating": "R",
				"Running_Time_min": null,
				"Distributor": "Strand",
				"Source": null,
				"Major_Genre": Major_Genre,
				"Creative_Type": null,
				"Director": null,
				"Rotten_Tomatoes_Rating": null,
				"IMDB_Rating": 6.9,
				"IMDB_Votes": 207
		 });
		fetch('http://localhost:3001/moviesInfo', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body:JSON.stringify(formData)
		   })
		   .then((response) => response.json())
		   .then(
			this.setState= {Title:'',Release_Date:'',Major_Genre:''}
		   )
		   .catch((error) => {
			 console.error(error);
	   });
  }
	
	myChangeHandler = (event) =>{
		let name = event.target.name;
		let value = event.target.value;
		if(name=== "title"){
			(value === "") ? this.setState({titleErrorMessage: "Title is required."}) : this.setState({titleErrorMessage: ""});
		}
		if(name=== "releaseDate"){
			(value === "") ? this.setState({releaseDateErrorMessage: "Release Date is required."}) : this.setState({releaseDateErrorMessage: ""});
		}
		if(name=== "majorGenre"){
			(value === "") ? this.setState({majorGenreErrorMessage: "Major Genre is required."}) : this.setState({majorGenreErrorMessage: ""});
		}
		
		//value === '' ? this.setState({errorMessage[name]: `${name} is required`})
		
	}
	
	render(){
		return(
			<div>
				<h4>AddMovie</h4>
				<form onSubmit={this.submitMovie} className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="title">Title:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title" onChange={this.myChangeHandler} onFocus={this.myChangeHandler} />
                    </div>
					<p style={{color:  this.state.color}}>{this.state.titleErrorMessage}</p>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="releaseDate">Release_Date:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="releaseDate" name="releaseDate" placeholder="Enter Release Date" onChange={this.myChangeHandler} onFocus={this.myChangeHandler} />
                    </div>
					<p style={{color:  this.state.color}}>{this.state.releaseDateErrorMessage}</p>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="majorGenre">Major_Genre:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="majorGenre" name="majorGenre" placeholder="Enter Major Genre" onChange={this.myChangeHandler} onFocus={this.myChangeHandler}/>
                    </div>
					<p style={{color:  this.state.color}}>{this.state.majorGenreErrorMessage}</p>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </div>
            </form>
			</div>
		);
	}
}

export default AddMovie;