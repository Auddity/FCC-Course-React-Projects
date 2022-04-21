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
        <div className="loc-ctnr">
          {/* icon */}
          <p>{loc}</p>
          <a target="_blank" rel="noreferrer" href={map}>view on Google Maps</a>
        </div>
        <h1 className="title">{title}</h1>
        <p className="dates">{start}-{end}</p>
        <p className="desc">{desc}</p>
      </div>
    </div>
  )
}

export default Cards;