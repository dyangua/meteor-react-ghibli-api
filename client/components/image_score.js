import React from "react";

const ImageScore = ({ rate }) => {
  const FILM_RATE = `${rate}%`;
  const FILM_DOWNRATE = `${100 - rate}%`;

  return (
    <div>
      <p>
        Rate
        <span style={{ margin: 5 }} className="badge">
          {rate}
        </span>
      </p>
      <div className="progress">
        <div
          style={{ width: FILM_RATE }}
          className="progress-bar progress-bar-success"
        />
        <div
          style={{ width: FILM_DOWNRATE }}
          className="progress-bar progress-bar-danger"
        />
      </div>
    </div>
  );
};

export default ImageScore;
