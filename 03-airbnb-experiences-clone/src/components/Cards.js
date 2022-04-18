import React from "react";
import '../css/Cards.css';

const Cards = (props) => {
  const {portrait, alt, rating, numReviews, loc, desc, cost, status, openSpots} = props;
  let badgeText;
  if(status === 'online'){
    badgeText = 'ONLINE';
  } else if(openSpots === 0) {
    badgeText = 'SOLD OUT';
  }
  
  return (
    <div className="card">
      {badgeText && 
        <div className="badge">{badgeText}</div>
      }
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