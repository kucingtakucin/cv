import React, {Component} from 'react';
import '../sass/style.css';
import {Col, Container, Row} from "reactstrap";

class AppMain extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="App-main">
                    <Container className="themed-container" fluid={true}>
                        <Row>
                            <Col sm="5" className="main-kiri">

                            </Col>
                            <Col sm="7" className="main-kanan">

                            </Col>
                        </Row>
                    </Container>
                </main>
            </React.Fragment>
        )
    }
}

export default AppMain;