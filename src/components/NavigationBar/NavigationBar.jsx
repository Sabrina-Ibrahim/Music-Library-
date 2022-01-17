import React from 'react';
import "./NavigationBar.css"

function NavigationBar() {
    return (
        <div className="card">
            <div className="name">
                <p><strong>This Song Name</strong></p>
                <div className="artist">
                    <p>The Author - Album</p></div></div>

            <div className="container">
                <div className="row row-cols-5">
                    <div className="col"><strong>Title</strong></div>
                    <div className="col"><strong>Artist</strong></div>
                    <div className="col"><strong>Album</strong></div>
                    <div className="col"><strong>Genre</strong></div>
                    <div className="col"><strong>Release Date</strong></div>
                </div>

            </div>

        </div>
    );
}

export default NavigationBar; 