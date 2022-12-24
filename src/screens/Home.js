import React from "react";
import Header from "../components/Header";
import Nav from "../components/Navbar";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";
import Country_Statistics from "../components/Country_Statistics";
import axios from "axios";
import DateCards from "../components/Date_Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: {},
      data: [],
    };
  }

  getTotal = async () => {
    let URL = process.env.REACT_APP_API_URL;
    try {
      await axios.get(URL).then((res) => {
        this.setState({
          total: res.data,
        });
      });
    } catch {
      console.log("api error");
    }
  };

  componentDidMount = () => {
    axios.get(process.env.REACT_APP_API_URL).then((result) => {
      console.log(result.data);

      this.setState({
        total: result.data,
      });
    });
  };

  getCountryByDate = (country, from, to) => {
    let URL = process.env.REACT_APP_API_URL + "/date/";
    console.log(URL);
    let PARAMS = {
      country: country,
      from: from,
      to: to,
    };
    axios.get(URL, { params: PARAMS }).then((result) => {
      console.log(result.data);

      this.setState({
        data: result.data,
      });
    });
  };

  render() {
    return (
      <>
        <Header />

        <Nav />
        <Statistics data={this.state.total} />
        <Country_Statistics getData={this.getCountryByDate} />
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
                    <DateCards key={idx} data={obj} />
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

export default Home;
