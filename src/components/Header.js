import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="ui clearing segment">
        <a
          className="ui right floated header"
          href="https://intense-sands-46818.herokuapp.com/"
        >
          Back to Portfolio
        </a>
        <h2 className="ui left floated header">Video Player</h2>
      </div>
    );
  }
}

export default Header;
