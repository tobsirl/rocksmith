import React, { Component } from 'react';
//import { Navbar, Nav, NavItem, Button, FormControl, FormGroup } from 'react-bootstrap';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends Component {
    state = {
        addBand:  false
    }

  
    render() {
        return (
   
        <div>
        <Navbar color="faded" dark expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <Button outline color="primary" onClick={this.addBand}>Add Band</Button>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/bands/">Bands</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              
              
            </Nav>
          
        </Navbar>
        </div>
      

        );
    }
}

export default NavigationBar;