import React from "react";
import "font-awesome/css/font-awesome.min.css";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fa fa-star text-warning"></i>);
    } else {
    }
  }

  return <div className="d-flex align-items-center justify-content-center">{stars}</div>;
};

export default StarRating;