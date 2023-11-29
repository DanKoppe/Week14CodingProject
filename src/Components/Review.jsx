import React from 'react'; //importing dependencies
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => { // Review function with a review prop that renders star rating, review name, review text.
  
  const renderStars = (rating) => { // render Star function, with rating argument, that renders stars equal to the user's selected rating.
    const starArray = [];  // empty array to store star rating

    
    for (let i = 0; i < rating; i++) {  // for loop that runs as many times as the rating which then pushes FaStar component to the array which the displays stars equal to the rating.
      starArray.push(<FaStar key={i} className='star' color="#ffc107" />);
    }

    return starArray;
  };

  return ( // returning a div with review name, review, and review rating star function.
    <div className='reviewContainer'>
      <p className='reviewUser'>Name: {review.user}</p>
      <p className='review'>Review: {review.review}</p>
      <div className='rating'>Rating: {renderStars(review.rating)}</div>
    </div>
  );
};

export default Review;
