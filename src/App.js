import React, { Component } from "react";
import axios from "axios";

import Page from "./component/tempForWeek";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: []
    };
  }

  componentDidMount = () => {
    let url = `http://api.aerisapi.com/forecasts/11101?client_id=pfqEaxmpxXbBwNk1iZlQw&client_secret=aNEQUUHoyX8nc18TbrzSSZ4hU8aNuepHneI1nQ7R`;
    axios
      .get(url)
      .then(data => {
        this.setState({
          weather: data.data.response[0]
        });
        console.log(data.data.response[0]);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { weather } = this.state;
    return(
      <div>
        <Page data={weather.periods} /> 
      </div>
    );
  }
}

export default App;
