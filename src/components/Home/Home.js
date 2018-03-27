import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button} from 'reactstrap';
import './Home.css'
import Rocksmith2014Edition_Logo from '../../images/PearlJamCard.jpg';


class Home extends Component {
    render() {
        return (
            <div>
                <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Welcome to Rocksmith!</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Add Song</a>
            <a href="#" class="btn btn-secondary my-2">Songs</a>
          </p>
        </div>
      </section>
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