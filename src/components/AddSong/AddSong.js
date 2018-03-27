import React, { Component } from 'react';
import axios from 'axios';

import './AddSong.css';

class AddSong extends Component {
    state = {
        songName: '',
        artistName: '',
        difficulty: '',
        speed: '',
    }

    postSongHandler = ( event ) => {
        event.preventDefault();
        const song = {
            songName: this.state.songName,
            artistName: this.state.artistName,
            difficulty: this.state.difficulty,
            speed: this.state.speed
        };
        axios.post( 'http://localhost:3100/songs', song )
            .then( res => {
                console.log(res);
                console.log(res.data);
                this.props.history.replace('/songs');
            })
            .catch(err => {
                console.log( err );
            });
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Song Name</ label>
                        <input className="form-control" 
                                type="text" 
                                placeholder="Song Name" 
                                value={this.state.songName}
                                onChange={( event ) => this.setState( { songName: event.target.value } )} />
                    </div>
                    <div className="form-group">
                        <label>Artist Name</ label>
                        <input className="form-control" 
                                type="text" 
                                placeholder="Artist Name" 
                                value={this.state.artistName}
                                onChange={( event ) => this.setState( { artistName: event.target.value } )} />
                    </div>
                    <div className="form-group">
                        <label>Difficulty</ label>
                        <input className="form-control" 
                                type="text" 
                                placeholder="Difficulty" 
                                value={this.state.difficulty}
                                onChange={( event ) => this.setState( { difficulty: event.target.value } )} />
                    </div>
                    <div className="form-group">
                        <label>Speed</ label>
                        <input className="form-control" 
                                type="text" 
                                placeholder="Speed" 
                                value={this.state.speed}
                                onChange={( event ) => this.setState( { speed: event.target.value } )} />
                    </div>
                    <button type="submit" 
                            className="btn btn-primary" 
                            onClick={this.postSongHandler}>Add Post</button>
                </form>  
            </div>
        );
    }
}

export default AddSong;