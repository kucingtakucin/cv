import React, {Component} from 'react';
import '../sass/style.css';
import {Col, Container, Row} from "reactstrap";

class AppFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Adam Arthur Faizal'
        }
    }

    render() {
        return (
            <React.Fragment>
                <footer className="App-footer">
                    <Container className="themed-container text-center bg-dark" fluid={true}>
                        <Row>
                            <Col lg="12">
                                <h5 className="text-center font-weight-bold">Copyright &copy; {new Date().getFullYear()}. <a href="http://github.com/AdamArthurFaizal">{this.state.name}</a>. All Rights Reserved</h5>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </React.Fragment>
        )
    }
}

export default AppFooter;