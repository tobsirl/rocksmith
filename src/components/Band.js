import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Band extends Component {
  
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.band.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.band.subtitle}</h6>
                    <Button bsStyle="success" bsSize="small">Edit</Button>
                    <Button bsStyle="danger" bsSize="small">Delete</Button>
                </div>
            </div>
        );
    }
}

Band.defaultProps = {
    band: {}
};

export default Band;

