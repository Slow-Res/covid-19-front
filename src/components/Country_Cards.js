import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class CountryCards extends React.Component {
  CountryHandler = () => {
    let data = this.props.data;
    console.log(data);
    this.props.save(data);
  };

  render() {
    return (
      <Card style={{ width: "18rem", fontSize: "1rem" }}>
        <div className="cardBody">
          <div className="pinky"></div>

          <div className="cardText">
            <p className="cardCountry">
              Country : {this.props.data.Country}, {this.props.data.CountryCode}
            </p>

            <p className="CardP">
              Total Confirmed Cases: {this.props.data.TotalConfirmed}
            </p>
            <p className="CardP">
              Total Deaths Cases: {this.props.data.TotalDeaths}
            </p>
            <p className="CardP">
              Total Recoverd Cases: {this.props.data.TotalRecovered}
            </p>
            <p className="CardP">Date: {this.props.data.Date}</p>
            <hr></hr>
            <button className="CardBtn" onClick={this.CountryHandler}>
              ADD TO MY RECORDS
            </button>
          </div>
        </div>
      </Card>
    );
  }
}

export default CountryCards;
