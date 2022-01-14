import React from 'react';
import './MusicTable.css';

const MusicTable = (props) => {
  return (
    <div className="MusicTable">
      <div className="container table">
        {props.music.map((song) => {
          return (
            <div className="row row-cols-4" key={song.title}>
              <div className="col">{song.title}</div>
              <div className="col">{song.album}</div>
              <div className="col">{song.genre}</div>
              <div className="col">{song.releaseDate}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MusicTable;
