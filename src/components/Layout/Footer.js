import React from 'react';
import { Navbar, NavLink, Nav, NavItem } from 'reactstrap';

const Footer = (props) => {
    return (
        <div>
          <Navbar>
           <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        </Navbar>
            
        </div>
    );
};


export default Footer;