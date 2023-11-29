import React from 'react';  //importing dependencies
import Movie from "./Movie";

const MovieList = ({movies, addReview}) => {  //Movie list function with two props: movies array and addReview function.
    return (
        <section className='container'>
            {
                movies.map (movie => {  //using map to iterate over each movie in the array and rendering our movie component with props for key(id), current movie object, and add review function. 
                    return (
                        <Movie key={movie.id} movie = {movie} addReview = {addReview}/>
                    )
                })
            }
        </section>
    );
}

export default MovieList; //exporting function