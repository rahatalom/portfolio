import React from "react";

function Header() {
  return (
    <div className="outerContainer">
      <div className="title">
        <h1>Rahatul Alom</h1>
        <h3>Front end engineer</h3>
        <button onClick="#proj" class="btn btn-danger btn-lg">
          <a className="see-proj" href="#proj">
            See projects
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
