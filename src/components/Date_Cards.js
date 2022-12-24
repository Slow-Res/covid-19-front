import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class DateCards extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem", fontSize: "1rem" }}>
        <div className="cardBody">
          <div className="pinky"></div>
          <div className="DateText">
            <p className="CardHeader">Date: {this.props.data.Date}</p>
            <p className="CardP">
              Number of Confirmed Cases: {this.props.data.Cases}
            </p>
          </div>
        </div>
      </Card>
    );
  }
}

export default DateCards;
