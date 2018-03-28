import React, { Component } from 'react';
import { Media } from 'reactstrap';
import RocksmithBuy from '../../images/RSPlatforms.png';
import './About.css';

class About extends Component {
    render() {
        return (
          <div>
          <Media>
            <Media left top href="#">
              <Media object src={RocksmithBuy} alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
              A PROVEN METHOD
              </Media>
              Rocksmith becomes your personal guitar teacher as it monitors how you play, dynamically adjusts the difficulty to your skill level, then slowly introduces more notes and phrases until you’re playing your favorite songs note-for-note.
            </Media>
          </Media>
          
        </div>

       

      
                
            
        );
    }
}

export default About;