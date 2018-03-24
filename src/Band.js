import React from 'react';

const Band = (props) => (
    <div class="card">
        <div class="card-body">
            <h4 className="card-title">{props.band.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{props.band.subtitle}</h6>
        
        </div>
    </div>

);

Band.defaultProps = {
    band: {}
};


export default Band;