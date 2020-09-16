import React from "react";

function Content2() {
  return (
    <div className="outer3">
      <div className="middle-div">
        <div class="card first-set" style={{ width: "14rem", height: "20rem" }}>
          <div class="card-body">
            <img src="CSS/images/web-page.png"></img>
            <div className="cardText firstText">
              <ul>
                <h4>Front End</h4>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript </li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card first-set" style={{ width: "14rem", height: "20rem" }}>
          <div class="card-body">
            <img src="CSS/images/share.png"></img>
            <div className="cardText secondText">
              <ul>
                <h4>Server</h4>
                <li>Nodejs</li>
                <li>Python</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card first-set" style={{ width: "14rem", height: "20rem" }}>
          <div class="card-body">
            <img src="CSS/images/database.png"></img>
            <div className="cardText thirdText">
              <ul>
                <h4>Database</h4>
                <li>mySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content2;
