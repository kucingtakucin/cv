import React, {Component, useState} from 'react';
import '../sass/style.css';
import {
    Button,
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";


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
            <p className="live-clock"><Button><Clock/></Button></p>
        </React.Fragment>
    )
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 10);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return this.state.date.toLocaleTimeString();
    }
}

export default AppNav;