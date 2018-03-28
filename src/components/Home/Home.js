import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Rocksmith2014Edition_Logo from '../../images/PearlJamCard.jpg';


class Home extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Welcome to Rocksmith!</h1>
          <h5>THE FASTEST WAY TO LEARN GUITAR</h5>
          <p className="lead text-muted">Join over 3 million people who have learned to play guitar with the award-winning Rocksmith method that adapts to you as you play.</p>
          <p>
            <Link to="/AddSong" className="btn btn-secondary my-2">Add Song</Link>
            <Link to="/songs" className="btn btn-secondary my-2">Songs</Link>
          </p>
        </div>
      </section>
                {/*
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
                */}
                
            </div>
                
            
        );
    }
}

export default Home;