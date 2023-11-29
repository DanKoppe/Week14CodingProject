import React from "react"; //importing dependencies
import Review from "./Review";
import { v4 as uuidv4 } from "uuid";

const ReviewList = ({ reviews }) => { // ReviewList function that maps over the reviews array and returns each review as a review component with the review prop set to the current review in the map function and the unique id as the key.
  return (
    <fieldset className="reviewsContainer">
      <legend>Reviews:</legend>
      {reviews.map((review) => {
        return (
          <div key={uuidv4()} className="reviews">
            <Review review={review} />
          </div>
        );
      })}
    </fieldset>
  );
};

export default ReviewList;
