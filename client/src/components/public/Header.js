import React from "react";

export default function Header() {
  return (
    <div className="homeHeader">
      <div className="homeHeader__container">
        <div className="homeHeader__text">
          <span>Chase The New Flavour</span>
          <h1>The Key To</h1>
          <h1>Fine Dining</h1>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie Condimentum
            volutpat morbi facilis quam scelerisque sapien. Et,penatibus aliquam
            amet tellus
          </p>
          <div>
            <button>Explore Menu</button>
          </div>
        </div>
        <div className="homeHeader__img">
          <img src="/image/header.png" alt="" />
          <div className="homeHeader__img-scroll">
            <div className="homeHeader__img-scroll-stick"></div>
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </div>
  );
}
