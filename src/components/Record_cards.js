import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Record_cards extends React.Component {
  deleteHandler = () => {
    let data = this.props.data;
    console.log(data);
    this.props.delete(data);
  };

  render() {
    return (
      <Card style={{ width: "18rem", fontSize: "1rem" }}>
        <div className="recordBody">
          <div className="pinky"></div>

          <div className="recordText">
            <p className="cardCountry">Country : {this.props.data.country}</p>

            <p className="CardP">Date: {this.props.data.Date}</p>

            <hr></hr>
            <button className="recordBtn" onClick={this.deleteHandler}>
              DELETE
            </button>
          </div>
        </div>
      </Card>
    );
  }
}

export default Record_cards;
