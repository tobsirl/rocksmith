import React from 'react';
import Band from './Band';

const getBands = (bands) => {
    return (
        <div className="card-deck">
        { bands.map(band => <Band key={band.id} band={band} /> )}
        </div>
    );
};

const BandsList = (props) => (
    <div>
        {getBands(props.bands)}
    </div>
);

BandsList.defaultProps = {
    bands: []
};

export default BandsList;