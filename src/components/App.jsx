import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://www.devcodecampmusiclibrary.com/api/music")
      .then((response) =>
        this.setState({
          songs: response.data,
        })
      );
  }

  render() {
    return (
      <h1>{this.state.songs.length > 0 ? this.state.songs[0].title : null}</h1>
    );
  }
}

export default App;
