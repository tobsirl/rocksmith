import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button} from 'reactstrap';
import './Home.css'
import Rocksmith2014Edition_Logo from '../../images/PearlJamCard.jpg';


class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h2>Welcome to Rocksmith!</h2>
                    <p>This is how to build a website</p>
                </Jumbotron>
                <Link to="/about">
                    <Button outline color="primary">About</Button>
                </Link>
                <Link to="/bands">
                    <Button outline color="primary">Bands</Button>
                </Link>
                <img src={Rocksmith2014Edition_Logo}/>
            </div>
                
            
        );
    }
}

export default Home;