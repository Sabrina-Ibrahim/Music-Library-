import React from 'react';

const MusicTable = (props) => {
    return (  
        <div>
        {props.music.map((song) => <li key={song.title}>{song.title}, {song.album}, {song.artist}, {song.genre}, {song.releaseDate}</li>)}
      </div>
    );

}

export default MusicTable ;
