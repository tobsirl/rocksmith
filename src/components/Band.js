import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Bands from './Bands';

class Band extends Component {
    state = {
        id: this.props.band.id,
        title: this.props.band.title,
        subtitle: this.props.band.subtitle
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
        let band = '';
        return (
            <div className="card" onClick={this.bandSelectedHandler}>
                <div className="card-body">
                    <h4 className="card-title">{this.props.band.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.band.email}</h6>
                    <Button bsStyle="success" bsSize="small" onClick={this.editBandHandler}>Edit</Button>
                    <Button bsStyle="danger" bsSize="small" onClick={this.deleteBandHandler}>Delete</Button>
                </div>
            </div>
        );
    }
}

Band.defaultProps = {
    band: {}
};

export default Band;

