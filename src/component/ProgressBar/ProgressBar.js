import React from "react";
import "./ProgressBar.style.scss";

export default class ProgressBar extends React.Component {
  render() {
    return (
      <>
        <div id="container">
          <div id="upper"></div>
          <div id="line">
            <span id="shipping-container" className="circle-container">
              <span className="big-circle">
                <span className="circle">
                  <span className="circle-number">1</span>
                </span>
              </span>

              <span className="circle-label">shipping</span>
            </span>
            <span id="review-container" className="circle-container">
              <span className="big-circle">
                <span className="circle">
                  <span className="circle-number">2</span>
                </span>
              </span>
              <span className="circle-label">review</span>
            </span>
          </div>
          <div id="lower"></div>
        </div>
      </>
    );
  }
}
