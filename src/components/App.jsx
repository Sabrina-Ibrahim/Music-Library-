import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MusicTable from "./MusicTable";

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
        <div>
            {this.state.songs.length > 0 ? <MusicTable music={this.state.songs} /> :null}   
        </div>
        )
  }
}

export default App;
