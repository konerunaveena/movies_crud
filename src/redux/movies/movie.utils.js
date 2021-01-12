export const deleteMovie = (movies,movieToDelete) =>{
    return  movies.filter(
        movie => movie.Title !== movieToDelete.Title 
    )
};

export const updateMovie = (movies,movieToUpdate) =>{
    return  movies.filter(
        movie => movie.Title === movieToUpdate.Title 
    )
}