import React from "react";

function Content() {
  return (
    <div className="outer2">
      <div className="intro-div">
        <h1 className="intro-title"> Front End Focused</h1>
        <div class="row">
          <div class="col-12 col-xl-6">
            <h3 class="intro-sub-title">Driven To Deliver Results</h3>
            <p class="intro-paragraph">
              As a motivated self-taught developer, I continuously work hard to
              produce results effectively and efficiently.
            </p>
            <h3 class="intro-sub-title">A Motivated Learner</h3>
            <p class="intro-paragraph">
              I have always kept up to date with the latest frameworks and I am
              eager to learn more as I go.
            </p>
          </div>
          <div class="col-12 col-xl-6  ">
            <img
              class="intro-img"
              style={{ height: "153px", width: "153px" }}
              src="CSS/images/javascript.png"
            ></img>
            <img
              class="intro-img"
              style={{ height: "153px", width: "153px" }}
              src="CSS/images/react.png"
            ></img>
            <img
              class="intro-img"
              style={{ height: "153px", width: "153px" }}
              src="CSS/images/nodejs.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
