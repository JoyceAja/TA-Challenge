import React, { Component } from "react";
import axios from "axios";

import Page from "./component/mainpage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    let url = `http://api.aerisapi.com/forecasts/11101?client_id=pfqEaxmpxXbBwNk1iZlQw&client_secret=aNEQUUHoyX8nc18TbrzSSZ4hU8aNuepHneI1nQ7R`;
    axios
      .get(url)
      .then(data => {
        this.setState({
          data: data.data.response[0]
        });
        console.log(data.data.response[0]);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { data } = this.state;
    return(
      <div>
        <Page data={data.periods} /> 
      </div>
    );
  }
}

export default App;
