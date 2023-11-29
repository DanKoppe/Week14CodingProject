import React, { useState } from 'react';  //importing dependencies including FaStar icons
import { FaStar } from 'react-icons/fa';

const StarRating = ({ onRate }) => {  // Star rating function that takes onRate prop
  const [rating, setRating] = useState(null);  // initializing state variables for rating and setRating updater function with initial value of null
  const [hover, setHover] = useState(null); // initializing state variables for hover and setHover updater function with initial value of null

  const handleRating = (value) => {  // function that sets rating state to the provided input value and triggers onRate function with same value
    setRating(value);
    onRate(value);
  };

  return ( // returning a div that displays 1-5 filled in stars depending on input value using hidden radio buttons and FaStar imported stars
    <div>
      {[...Array(5)].map((_, i) => { // maping over a 5 length array and creating an array with 5 stars
        const ratingValue = i + 1;
        
        return (  // returning/rendering our stars each as a hidden radio button with its own rating value based on it's index which executes the handleRating function when clicked.  Also uses the FaStar react component which changes color (filled) when hovered and keep the color when clicked.
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
            />
            <FaStar
              className='star'
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
