import React, { Component } from 'react';
import SongsList from './SongsList';
//import BandService from '../services/BandsService';
import axios from '../axios';


class Songs extends Component {

    constructor() {
        super();
        
        this.state = {
            songs: []
        };
    }
    componentDidMount() {
        
        axios.get('/songs')
            .then(res => {
                const songs = res.data;
                this.setState({songs: songs});
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
                        <SongsList songs={this.state.songs} />
                        {console.log(this.state.songs)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Songs;