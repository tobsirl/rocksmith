import React from 'react';
import { Navbar, NavLink, Nav, NavItem } from 'reactstrap';

const Footer = (props) => {
    return (
        <div>
          <Navbar>
           <Nav>
          <NavItem>
            <NavLink href="https://github.com/facebook/create-react-app">React</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/typicode/json-server">Json-server</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/axios/axios">Axios</NavLink>
          </NavItem>
        </Nav>
        </Navbar>
            
        </div>
    );
};


export default Footer;