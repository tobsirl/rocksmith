import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Rocksmith!</h2>
                    <p>This is how to build a website</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
                <Link to="/bands">
                    <Button bsStyle="primary">Bands</Button>
                </Link>
            </Grid>
                
            
        );
    }
}

export default Home;