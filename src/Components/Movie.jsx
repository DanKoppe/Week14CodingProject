import React from 'react';  //importing dependencies
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const Movie = ({ movie, addReview }) => {  //Movie function with two props: movie object and addReview function.
  return ( // rendering the movies with a movie id key, title, year, thumbnail, Synopsis all pulled from STORE.js state as well as two components, ReviewList and ReviewForm. 
    <article className='movie-container' key={movie.id}>
      <h3>{movie.title} - {movie.year}</h3>
      <header>
        <img className='thumbnail' src={movie.imgSrc} alt={movie.title} />
        <div className='details'>
          <p>Synopsis:<br></br>{movie.synopsis}</p>
        </div>
      </header>
      <div>
        <ReviewList reviews={movie.reviews} /> 
        <ReviewForm movieID={movie.id} addReview={addReview} />
      </div>
    </article>
  );
};

export default Movie;
