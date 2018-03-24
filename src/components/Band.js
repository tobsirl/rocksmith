import React from 'react';
import { Button } from 'react-bootstrap';

const Band = (props) => (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">{props.band.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{props.band.subtitle}</h6>
            <Button bsStyle="success" bsSize="small">Edit</Button>
            <Button bsStyle="danger" bsSize="small">Delete</Button>
        </div>
    </div>

);

Band.defaultProps = {
    band: {}
};


export default Band;