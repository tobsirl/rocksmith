import React, { Component } from 'react';
import axios from 'axios';
import './Song.css';
import Buttons from './config/ButtonsConfig';

class Song extends Component {
    state = {
        id: this.props.song.id,
        songName: this.props.song.songName,
        artistName: this.props.song.artistName,
        difficulty: this.props.song.difficulty,
        speed: this.props.song.speed,
        imageUrl: this.props.geUrl,
        status: ''
    }

    // bandSelectedHandler = (id) => {
    //     //this.props.history.push ( '/bands/' + id);
    //     console.log('You clicked here' + id);
    // }
    viewSongHandler = ( id ) => {
        console.log('View');
    }

    editSongHandler = () =>  this.setState({ status : 'edit'} );

    cancelSongHandler = () => {
              this.setState({ status : '', 
              songName: this.props.song.songName,
              artistName: this.props.song.artistName,
              difficulty: this.props.song.difficulty,
              speed: this.props.song.speed } ) ;
    };
    
    saveSongHandler = (event) => {
        event.preventDefault();
        let songName = this.state.songName.trim();
        let artistName = this.state.artistName.trim();
        let difficulty = this.state.difficulty.trim();
        let speed = this.state.speed.trim();
        if (!songName || !artistName || !difficulty || !speed) {
           return;
        }
        this.setState({status : ''} )
        this.props.updateHandler(this.props.song.songName,
            artistName, difficulty, speed);
      };      
    

    deleteSongHandler = (id) => {
        
        console.log('Delete');
        axios.delete('http://localhost:3100/songs/' + id)
            .then(res => {
                console.log(res);
            });
    }
  
    render() {  
        let activeButtons = Buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.cancelSongHandler;
        let fields = [
            <p key={'songName'}>{this.state.songName}</p>,
            <p key={'artistName'} >{this.state.artistName}</p>,
            <p key={'difficulty'} >{this.state.difficulty}</p>,
            <p key={'speed'} >{this.state.speed}</p>
           ] ;
           if (this.state.status === 'edit' ) {
            activeButtons = Buttons.edit ;
            leftButtonHandler = this.saveSongHandler;
            rightButtonHandler = this.handleCancel ;
            fields = [
                <input type="text" className="form-control"
                   value={this.state.songName}
                   onChange={( event ) => this.setState( { songName: event.target.value } )} />,
                <input type="text" className="form-control"
                   value={this.state.artistName}
                   onChange={( event ) => this.setState( { artistName: event.target.value } )} />,
                <input type="text" className="form-control"
                   value={this.state.phone_number}
                   onChange={( event ) => this.setState( { difficulty: event.target.value } )} />,
                <input type="text" className="form-control"
                   value={this.state.phone_number}
                   onChange={( event ) => this.setState( { speed: event.target.value } )} />
             ] ;
         }    

        return (
           <div>
               <div className="row" />
        <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={this.props.song.imageUrl} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{this.props.song.songName}</h5>
                <p className="card-text">{this.props.song.artistName}</p>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Difficulty: {this.props.song.difficulty}</li>
                <li className="list-group-item">Speed: {this.props.song.speed}</li>
                </ul>
                  <p className="card-text"></p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div >
                      <button 
                            type="button" 
                            className="btn btn-sm btn-outline-success" 
                            onClick={this.viewSongHandler}>View</button>
                      <button 
                            type="button" 
                            className="btn btn-sm btn-outline-warning"
                            onClick={leftButtonHandler}>Edit
                        
                      </button>
                      <button 
                            type="button" 
                            className="btn btn-sm btn-outline-danger" 
                            onClick={rightButtonHandler}>Delete
                        
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

           </div>

        );
    }
}

Song.defaultProps = {
    song: {}
};

export default Song;

