import React, { useState } from "react"; //importing dependencies including initial data sets from STORE.js
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import "./style.css";
import { STORE } from "./assets/data/STORE.js";

export default function App() { // root app function to be exported index.js
  const [movies, setMovies] = useState(STORE); // useState hook with movies variable and setMovies function to update the state.  Initial state set to the STORE data.

  const addReview = (movieID, review) => { // add review function with movie id and review as arguments.
    const newMovies = [...movies]; // using spread operator to create new array with the state of movies.
    const index = newMovies.findIndex((movie) => movie.id === movieID); // finding index of the movie with the correct movie id.
    newMovies[index].reviews.push(review); // adding a new review to the reviews array for the movie with the corresponding index.
    setMovies(newMovies); // updating the state of the movies array with the new review.
  };

  return ( // returning a div with the Header component and the now updated MovieList component with the movies state prop.
    <div className="container">
      <Header />
      <MovieList movies={movies} addReview={addReview} />
    </div>
  );
}
