import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
//import Bands from './Bands';
import './Song.css';

class Song extends Component {
    state = {
        id: this.props.song.id,
        songName: this.props.song.songName,
        artistName: this.props.song.artistName,
        difficulty: this.props.song.difficulty,
        speed: this.props.song.speed,
        imageUrl: this.props.geUrl

    }

    // bandSelectedHandler = (id) => {
    //     //this.props.history.push ( '/bands/' + id);
    //     console.log('You clicked here' + id);
    // }

    editBandHandler = () => {
        console.log('Edit');
    }

    deleteBandHandler = () => {
        console.log('Delete');
    }
  
    render() {   
        return (
           <div>
               {/*<Card>
        <CardBody>
          <CardTitle>{this.props.song.songName}</CardTitle>
          <CardSubtitle>{this.props.song.artistName}</CardSubtitle>
          </CardBody>
          <CardImg width="100%" src={this.props.song.imageUrl} alt="" />
          {console.log(this.props.song.imageUrl)}
          <CardBody>
          <Button onClick={this.editBandHandler} outline color="success">Edit</Button>
          <Button onClick={this.deleteBandHandler} outline color="danger">Delete</Button>
        </CardBody>
               </Card>*/}
        <div className="col-md-6">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={this.props.song.imageUrl} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{this.props.song.songName}</h5>
                <p className="card-text">{this.props.song.artistName}</p>
                <ul className="list-group list-group-flush">
    <li className="list-group-item">Difficulty: {this.props.song.difficulty}</li>
    <li className="list-group-item">Speed: {this.props.song.speed}</li>
  </ul>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.editBandHandler}>Edit</button>
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

