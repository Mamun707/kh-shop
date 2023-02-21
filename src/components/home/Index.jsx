import React from "react";

function HomeComponents() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="slider_2.jpg"
          className="card-img"
          alt="bg-img"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3">New Collections Arrival</h5>
            <p className="card-text fs-2 lead">Checkout all the Trends</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponents;
