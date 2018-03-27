import React from 'react';
import Song from './Song';

const getSongs = (songs) => {
    return (
        <div className="card-deck">
        { songs.map(song => <Song key={song.id} song={song} /> )}
        </div>
    );
};

const SongsList = (props) => (
    <div>
        {getSongs(props.songs)}
    </div>
);

SongsList.defaultProps = {
    songs: []
};

export default SongsList;