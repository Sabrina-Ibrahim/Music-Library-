import React from 'react';
import './MusicTable.css';

const MusicTable = (props) => {
  return (
    <div className="MusicTable">
      <div className="container table music">
        {/* song.title=Drive My Car+>drive my car includes(props.search=dRiVe my car>drive my car) */}
        {props.music.filter((song) => (song.title.toLowerCase().includes(props.search.toLowerCase()) || song.artist.includes(props.search) || song.album.includes(props.search) || song.genre.includes(props.search) || song.releaseDate.includes(props.search))).map((song) => {
          return (
            <div className="row row-cols-5" key={song.title}>
              <div className="col">{song.title}</div>
              <div className="col">{song.artist}</div>
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
