import React, { useState } from 'react'; //importing dependencies
import { v4 as uuidv4 } from "uuid";
import StarRating from './StarRating';

const ReviewForm = ({ movieID, addReview }) => {  // review form function with movie ID and addReview as props
  const [user, setUser] = useState('');  // using useState hook to initialize user and setUser to an empty string
  const [review, setReview] = useState('');  // using useState hook to initialize review and setReview to empty string
  const [stars, setStars] = useState(1);  // using useState hook to set initial value of stars to 1

  const userHandler = (e) => {  // event handler to update the user state to input value
    setUser(e.target.value);
  };

  const reviewHandler = (e) => {  // event handler to update review state to input value
    setReview(e.target.value);
  };

  const ratingHandler = (value) => {  // event handler to update star state to the selected star value (1-5)
    setStars(value);
  };

  const submitHandler = (e) => { // form submission event handler that prevents default, generates unique review ID, adds user, review, star rating with addReview prop function, and then resets the form inputs.
    e.preventDefault();
    const reviewId = uuidv4();
    addReview(movieID, {
      id: reviewId,
      user,
      review,
      rating: stars,
    });
    resetForm();
  };

  const resetForm = () => { // form reset function
    setUser('');
    setReview('');
  };

  return ( // returning a form div with inputs and lables for name, review, and rating, along with associated submit functions
    <div>
      <fieldset className="reviewFormContainer">
        <legend>Add Review:</legend>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">User Name:</label>
          <input type="text" value={user} onChange={userHandler} required />
          <label htmlFor="review">Review:</label>
          <textarea type="text" value={review} onChange={reviewHandler} required></textarea><br></br>
          <label>Rating</label>
          <StarRating selectedStars={stars} onRate={ratingHandler} />
          <input type="submit" value="Submit" />
        </form>
      </fieldset>
    </div>
  );
};

export default ReviewForm;
