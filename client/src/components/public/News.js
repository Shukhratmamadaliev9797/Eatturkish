import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <div className="homeNews">
      <div className="homeNews__container">
        <div className="homeNews__title">
          <p>News</p>
          <i class="fa-solid fa-spoon"></i>
          <h1>Eaturkish Updates</h1>
        </div>
        <div className="homeNews__newslist">
          <div className="homeNews__news">
            <div>
              <img src="/image/grill.jpeg" alt="" />
            </div>
            <div className="homeNews__news-content">
              <h3>Tips For Preparing And Caring For Your Grill</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                esse officia eaque enim omnis obcaecati distinctio dicta
                similique,
              </p>
              <div className="homeNews__news-action">
                <Link to="">Read More</Link>
                <span>16-02-2023</span>
              </div>
            </div>
          </div>
          <div className="homeNews__news">
            <div>
              <img src="/image/grill.jpeg" alt="" />
            </div>
            <div className="homeNews__news-content">
              <h3>Tips For Preparing And Caring For Your Grill</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                esse officia eaque enim omnis obcaecati distinctio dicta
                similique,
              </p>
              <div className="homeNews__news-action">
                <Link to="">Read More</Link>
                <span>16-02-2023</span>
              </div>
            </div>
          </div>
          <div className="homeNews__news">
            <div>
              <img src="/image/grill.jpeg" alt="" />
            </div>
            <div className="homeNews__news-content">
              <h3>Tips For Preparing And Caring For Your Grill</h3>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                esse officia eaque enim omnis obcaecati distinctio dicta
                similique,
              </p>
              <div className="homeNews__news-action">
                <Link to="">Read More</Link>
                <span>16-02-2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="homeNews__viewMore">
          <Link>View More</Link>
        </div>
      </div>
    </div>
  );
}
