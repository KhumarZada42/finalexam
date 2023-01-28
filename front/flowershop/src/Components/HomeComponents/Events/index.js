import React from "react";
import "./style.scss";

function Events() {
  return (
    <>
      <div>
        <div className="heading">
          <p>Devoted to wonderful beauty</p>
          <h2>Events Pricing</h2>
        </div>
        <div className="eventcardeve">
          <div class="cardeve">
            <h5 class="cardeve-title">$16 per table</h5>
            <h6>Birthday Events</h6>
            <p class="cardeve-text">
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <a href="#" class="btnshop">Shop now</a>
          </div>
        </div>
        <div className="eventcardeve">
          <div class="cardeve">
            <h5 class="cardeve-title">$31 per table</h5>
            <h6>Wedding Events</h6>
            <p class="cardeve-text">
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <a href="#" class="btnshop">Shop now</a>
          </div>
        </div>
        <div className="eventcardeve">
          <div class="cardeve">
            <h5 class="cardeve-title">$52 per table</h5>
            <h6>Party Events</h6>
            <p class="cardeve-text">
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <a href="#" class="btnshop">Shop now</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
