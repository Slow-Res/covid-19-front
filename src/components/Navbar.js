import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/all"}>All countries</Link>
        <Link to={"/records"}>My Records</Link>
      </div>
    );
  }
}

export default Nav;
