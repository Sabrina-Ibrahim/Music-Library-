import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://www.devcodecampmusiclibrary.com/api/music") 
        .then((response) => this.setState({
          songs: response.data
        })
      );
  }

  render() {
    return (
      <ul>
        {this.state.songs.length > 0 ? this.state.songs.map((song) => <li>{song.title}, {song.album}, {song.artist}, {song.genre}, {song.releaseDate}</li>): null}
      </ul>
    );
  }
}

export default App;
