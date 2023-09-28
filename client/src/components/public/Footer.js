import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__newsletter">
          <span>Newsletter</span>
          <h1>Subscribe To Our Newsletter</h1>
          <p>And never miss latest Updates!</p>
          <form action="">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="footer__footer">
          <div className="footer__footer-container">
            <div className="footer__footer-info">
              <div className="footer__footer-contact">
                <h3>Contact Us</h3>
                <ul>
                  <li>9 W 53rd st, London, NY 10019, UK</li>
                  <li>+07223234432</li>
                  <li>+07223234432</li>
                </ul>
              </div>
              <div className="footer__footer-logo">
                <h1>Eaturkish</h1>
                <p>
                  "The best way to find yourself is to lose yourself in the
                  service of others"
                </p>
                <ul>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__footer-workingHours">
                <h3>Working Hours</h3>
                <ul>
                  <li>Monday-Friday:</li>
                  <li>08:00 am - 12:00 am</li>
                  <li>Saturday-Sunday</li>
                  <li>07:00 am - 11:00 pm</li>
                </ul>
              </div>
            </div>
            <div className="footer__footer-reserve">
              2023 All Rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
