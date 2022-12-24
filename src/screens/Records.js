import React, { Component } from "react";
import Header from "../components/Header";
import Nav from "../components/Navbar";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";
import Record_cards from "../components/Record_cards";

export default class Records extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: {},
      data: [],
    };
  }

  getData = () => {
    try {
      let URL = process.env.REACT_APP_API_URL + "/records/";
      axios.get(URL).then((result) => {
        console.log(result.data);
        this.setState({
          data: result.data,
        });
      });
    } catch (error) {}
  };
  componentDidMount = () => {
    this.getData();
  };

  deleteHandler = (data) => {
    let URL = process.env.REACT_APP_API_URL + "/records/" + data.id;
    axios.delete(URL).then(() => this.getData());
  };

  render() {
    return (
      <>
        <Header />
        <Nav />

        <h1 style={{ textAlign: "center", marginTop: "5vh" }}>
          COVID19 Statistics for All countries
        </h1>

        <div className="cardsContainer">
          <Row>
            {"" ||
              this.state.data.map((obj, idx) => {
                return (
                  <Col
                    className="cardCol"
                    key={idx}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                  >
                    <Record_cards
                      delete={this.deleteHandler}
                      key={idx}
                      data={obj}
                    />
                  </Col>
                );
              })}
          </Row>
        </div>
        <Footer />
      </>
    );
  }
}
