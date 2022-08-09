import React from "react";

export default function Travel(props) {
  console.log(props.imageUrl);
  return (
    <div className="travel-card">
      <img
        src={props.imageUrl}
        className="card--image"
        alt="Landscape Images"
      />
      <div className="card--content">
        <div className="card--header">
          <h3 className="card--location">{props.location.toUpperCase()}</h3>
          <a
            href={props.googleMapsUrl}
            className="card--map-link"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="card--title">{props.title}</h2>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
