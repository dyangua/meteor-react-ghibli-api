import React from "react";
import ImageScore from "./image_score";

const ImageDetail = ({ title, image, description, rate }) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={image} alt={title} />
      </div>
      <div className="media-body">
        <h3 className="media-heading">{title}</h3>
        <p>{description}</p>
        <ImageScore rate={rate} />
      </div>
    </li>
  );
};

export default ImageDetail;
