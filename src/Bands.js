import React, { Component } from 'react';
import BandsList from './BandsList';
import BandService from './services/BandsService';

class Bands extends Component {

    constructor() {
        super();
        
        this.state = {
            bands: []
        };
    }
    componentDidMount() {
        this.setState(() => ({ bands: BandService.getBands() }));
    }


    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <BandsList bands={this.state.bands} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bands;