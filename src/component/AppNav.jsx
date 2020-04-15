import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../sass/style.css';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";

function AppNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <React.Fragment>
            <Navbar color="info" dark fixed="top" expand="md" className="text-center App-nav">
                <Container className="themed-container" fluid={true}>
                    <NavbarBrand href="/" className="font-weight-bold">Adam</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/AdamArthurF" target="_blank">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>React JS version : {React.version}</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default AppNav;