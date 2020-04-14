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

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

Container.propTypes = {
    fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    // applies .container-fluid class if bool or .container-{breakpoint} if string
}

export default AppNav;