import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Country_Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      endDate: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    let country = e.target.country.value;
    let from = new Date(e.target.from.value);
    let to = new Date(e.target.to.value);
    try {
      from = from.toISOString();
      to = to.toISOString();
    } catch (error) {}

    this.props.getData(country, from, to);
  };

  render() {
    return (
      <div className="countryStatistics">
        <h1 className="countryFormHeader">
          Get Statistics for a specific country
        </h1>

        <div>
          <form onSubmit={this.submitHandler} className="countryForm">
            <input name="country" type={"text"}></input>

            <div className="selector">
              <input type={"date"} name="from" className="DatePicker" />
            </div>

            <div className="selector">
              <input type={"date"} name="to" className="DatePicker" />
            </div>

            <button type="submit">Search</button>
          </form>

          {/* <h1>{this.state.startDate.toISOString()}</h1> */}
          {/* <h1>{this.state.startDate.toISOString()}</h1> */}
          {/* <h1>{format(this.state.newDate, "YYYY-MM-DD'T'HH:MM:SS.SSSZ")}</h1> */}
        </div>
      </div>
    );
  }
}

export default Country_Statistics;
