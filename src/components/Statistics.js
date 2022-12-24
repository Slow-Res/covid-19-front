import React from "react";

class Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total_confirmed: 0,
      total_deaths: 0,
      total_recovered: 0,
    };
  }

  render() {
    return (
      <div className="Statistics">
        <h1>World Total Statistics</h1>
        <div className="Stats">
          <p>
            Total Confirmed:{" "}
            {this.props.data.TotalConfirmed || this.state.total_confirmed}
          </p>
          <p>
            Total Deaths:{" "}
            {this.props.data.TotalDeaths || this.state.total_deaths}
          </p>
          <p>
            Total Recovered:{" "}
            {this.props.data.TotalRecovered || this.state.total_recovered}
          </p>
        </div>
      </div>
    );
  }
}

export default Statistics;
