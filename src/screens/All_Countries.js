import React, { Component } from "react";
import Header from "../components/Header";
import Nav from "../components/Navbar";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountryCards from "../components/Country_Cards";
import Footer from "../components/Footer";

export class All_Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      savedData: [],
    };
  }

  componentDidMount = () => {
    try {
      let URL = process.env.REACT_APP_API_URL + "/all/";
      axios.get(URL).then((result) => {
        this.setState({
          data: result.data,
        });
      });

      URL = process.env.REACT_APP_API_URL + "/records/";
      axios.get(URL).then((result) => {
        this.setState({
          savedData: result.data,
        });
      });
    } catch (error) {}
  };

  checkCountry = (obj) => {
    let arr = this.state.savedData;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].country == obj.Country) return true;
    }
    return false;
  };

  addRecord = (data) => {
    let obj = {
      country: data.Country,
      total_confirmed_cases: data.TotalConfirmed,
      total_deaths_cases: data.TotalDeaths,
      total_recovered_cases: data.TotalRecovered,
      Date: data.Date,
    };
    let url = process.env.REACT_APP_API_URL + "/records/";
    axios.post(url, obj).then((result) => {
      let filterd = this.state.data.filter((i) => i.Country != data.Country);
      this.setState({
        data: filterd,
      });
    });
    console.log(obj);
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
                let flag = this.checkCountry(obj);
                console.log(flag);
                if (flag) return "";
                return (
                  <Col
                    className="cardCol"
                    key={idx}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                  >
                    <CountryCards save={this.addRecord} key={idx} data={obj} />
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

export default All_Countries;
