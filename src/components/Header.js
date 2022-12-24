import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="Header">
          <div className="logo">
            <h1>COVID</h1>
            <img src="/logo.PNG" alt="image" width={"200px"} />
          </div>
          <h2>Covid19 Statistics</h2>
          <p>
            A website to provide you with all the updates on covid-19 statistics
            around the world
          </p>
        </div>
      </>
    );
  }
}

export default Header;
