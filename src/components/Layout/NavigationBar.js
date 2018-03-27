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
            <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
            
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Addsong">Add Song</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/songs/">Songs</NavLink>
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