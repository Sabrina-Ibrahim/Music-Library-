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
            songs: [],
            search: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.song)
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
            <>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    {/* <lable>Song</lable> */}
                    <input name="search" type="text" onChange={this.handleChange} value={this.state.search} />
                    <button className="searchMusic" type="submit">Search</button></form>

                <div>
                    {/* <SearchBar /> */}
                    <NavigationBar />
                    {this.state.songs.length > 0 ? <MusicTable music={this.state.songs} search={this.state.search} /> : null}
                </div>
            </>
        )
    }
}

export default App;
