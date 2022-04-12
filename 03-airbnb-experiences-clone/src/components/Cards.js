import React from "react";
import portrait from '../images/KatieZaferes.png';
import star from '../images/Star 1.png';
import '../css/Cards.css';

const Cards = () => {
  return (
    <div className="card">
      <img src={portrait} alt="Katie Zaferes" className="portrait"/>
      <div className="cardInfo">
        <div className="ratingCntnr">
          <img src={star} alt="star" />
          <p className="ratingText">
            5.0
            <span>
              (6) &bull; USA
            </span>
          </p>
        </div>
        <p className="activityTitle">
          Lessons with Katie Zafares
        </p>
        <p className="cost">
          <span className="bold">From $136 </span>
          / person
        </p>
      </div>
    </div>
  );
}

export default Cards