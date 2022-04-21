import React from "react";
import '../css/Cards.css';

const Cards = props => {
  let {
    title, 
    location:loc, 
    mapLink:map,
    description:desc,
    imageSource:img
  } = props;
  let { startDate:start } = props.dates;
  let { endDate:end } = props.dates;

  return (
    <div className="card">
      <div className="img-ctnr">
        <img src={img} alt={title} />
      </div>
      <div className="info-ctnr">

      </div>
    </div>
  )
}

export default Cards;