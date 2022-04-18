import React from "react";
import '../css/Cards.css';

const Cards = ({portrait, alt, rating, numReviews, loc, desc, cost}) => {
  return (
    <div className="card">
      <img src={`./images/${portrait}`} alt={alt} className="portrait"/>
      <div className="cardInfo">
        <div className="ratingCntnr">
          <img src="./images/Star 1.png" alt="star" />
          <p className="ratingText">
            {rating}
            <span>
              ({numReviews}) &bull; {loc}
            </span>
          </p>
        </div>
        <p className="activityTitle">
          {desc}
        </p>
        <p className="cost">
          <span className="bold">From ${cost} </span>
          / person
        </p>
      </div>
    </div>
  );
}

export default Cards