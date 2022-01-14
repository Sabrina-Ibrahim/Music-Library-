import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";
import SearchBar from "./SearchBar/SearchBar";
import NavigationBar from "./NavigationBar/NavigationBar";

class App extends Component {
    constructor() {
        super();
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
                <SearchBar />
                <NavigationBar />
                {this.state.songs.length > 0 ? <MusicTable music={this.state.songs} /> : null}
            </div>
        )
    }
}

export default App;
