import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
//import Bands from './Bands';
import './Band.css';

class Band extends Component {
    state = {
        id: this.props.band.id,
        title: this.props.band.title,
        subtitle: this.props.band.subtitle,
        imageUrl: this.props.band.imageUrl

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
            /*
            <div className="movie-card" onClick={this.bandSelectedHandler}>
                <div className="movie-card card">
                    <h4 className="card-title">{this.props.band.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.band.subtitle}</h6>
                    <Button bsStyle="success" bsSize="small" onClick={this.editBandHandler}>Edit</Button>
                    <Button bsStyle="danger" bsSize="small" onClick={this.deleteBandHandler}>Delete</Button>
                </div>
            </div>
            */
           <div>
               <Card>
        <CardBody>
          <CardTitle>{this.props.band.title}</CardTitle>
          <CardSubtitle>{this.props.band.subtitle}</CardSubtitle>
          </CardBody>
          <CardImg width="100%" src={this.props.band.imageUrl} alt="" />
          {console.log(this.props.band.imageUrl)}
          <CardBody>
          <Button onClick={this.editBandHandler} outline color="success">Edit</Button>
          <Button onClick={this.deleteBandHandler} outline color="danger">Delete</Button>
        </CardBody>
        </Card>

           </div>

        );
    }
}

Band.defaultProps = {
    band: {}
};

export default Band;

