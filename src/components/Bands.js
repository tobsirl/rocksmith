import React, { Component } from 'react';
import BandsList from './BandsList';
//import BandService from '../services/BandsService';
import axios from '../axios';


class Bands extends Component {

    constructor() {
        super();
        
        this.state = {
            bands: []
        };
    }
    componentDidMount() {
        //this.setState(() => ({ bands: BandService.getBands() }));
        axios.get('/bands')
            .then(res => {
                const bands = res.data;
                this.setState({bands: bands});
            })
            .catch(err => {
                console.log( err );
            });
    }


    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <BandsList bands={this.state.bands} />
                        {console.log(this.state.bands)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Bands;