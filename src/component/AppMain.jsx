import React, {Component} from 'react';
import PropTypes from "prop-types";
import '../sass/style.css';
import {Col, Container, Media, Row} from "reactstrap";

class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kemampuan1 : 'Kemampuan Komputer',
            kemampuan2 : 'Kemampuan Bahasa',
            organisasi : 'Pengalaman Organisasi',
            kepribadian : 'Kepribadian',
            hobi: 'Hobi'
        }
    }

    render() {
        return (
            <React.Fragment>
                <main className="App-main">
                    <Container className="themed-container" fluid={true}>
                        <Row>
                            <Col sm="5" className="main-left d-flex flex-column align-items-stretch justify-content-center">
                                <Media>
                                    <Media left href="#">
                                        {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                        <i className="fas fa-user-graduate fa-3x mr-3 ml-5"/>
                                    </Media>
                                    <Media body className="mb-3">
                                        <Media heading className="mt-1 mb-3">
                                            <h2 className="font-weight-bold">{this.state.kemampuan1}</h2>
                                        </Media>
                                        <Row>
                                            <Col sm="6">
                                                <p className="mb-0">Microsoft Office</p>
                                                <p className="mb-0">Java</p>
                                                <p className="mb-0">C++</p>
                                                <p className="mb-0">Python</p>
                                                <p className="mb-0">JavaScript</p>
                                                <p className="mb-0">PHP</p>
                                            </Col>
                                            <Col sm="6">
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/></div>
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="far fa-circle"/></div>
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/></div>
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/></div>
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/></div>
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="far fa-circle"/></div>
                                            </Col>
                                        </Row>
                                    </Media>
                                </Media>
                                <Media>
                                    <Media left href="#">
                                        {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                        <i className="fas fa-user-graduate fa-3x mr-3 ml-5"/>
                                    </Media>
                                    <Media body>
                                        <Media heading className="mt-1 mb-3">
                                            <h2 className="font-weight-bold">{this.state.kemampuan2}</h2>
                                        </Media>
                                        <Row>
                                            <Col sm="6">
                                                <p className="mb-0">Bahasa Jawa</p>
                                                <p className="mb-0">Bahasa Indonesia</p>
                                                <p className="mb-0">Bahasa Inggris</p>
                                                <p className="mb-0">Bahasa Arab</p>
                                            </Col>
                                            <Col sm="6">
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/></div>
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="far fa-circle"/></div>
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/></div>
                                                <div><i className="fas fa-circle"/>{' '}<i className="fas fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/>{' '}<i className="far fa-circle"/></div>
                                            </Col>
                                        </Row>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm="7" className="main-right d-flex flex-column align-items-stretch justify-content-center">
                                <Media className="ml-5">
                                    <Media left href="#">
                                        {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                        <i className="fas fa-users fa-3x mr-3"/>
                                    </Media>
                                    <Media body className="mb-3">
                                        <Media heading className="mt-1 mb-3">
                                            <h2 className="font-weight-bold">{this.state.organisasi}</h2>
                                        </Media>
                                        <section>
                                            <p className="mb-0">2016 - 2019     : MPK Smansakra</p>
                                            <p className="mb-0">2016 - 2019     : Rohis Smansakra</p>
                                            <p className="mb-0">2019 - Sekarang : Labkom FMIPA UNS</p>
                                        </section>
                                    </Media>
                                </Media>
                                <Media className="ml-5">
                                    <Media left href="#">
                                        {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                        <i className="fas fa-users fa-3x mr-3"/>
                                    </Media>
                                    <Media body className="mb-3">
                                        <Media heading className="mt-1 mb-3">
                                            <h2 className="font-weight-bold">{this.state.kepribadian}</h2>
                                        </Media>
                                        <Row>
                                            <Col sm="4">
                                                <ul>
                                                    <li>Jujur</li>
                                                    <li>Disiplin</li>
                                                </ul>
                                            </Col>
                                            <Col sm="4">
                                                <ul>
                                                    <li>Tanggung Jawab</li>
                                                    <li>Semangat</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Media>
                                </Media>
                                <Media className="ml-5">
                                    <Media left href="#">
                                        {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                        <i className="fas fa-users fa-3x mr-3"/>
                                    </Media>
                                    <Media body className="mb-3">
                                        <Media heading className="mt-1 mb-3">
                                            <h2 className="font-weight-bold">{this.state.hobi}</h2>
                                        </Media>
                                        <Media>
                                            <Media left href="#">
                                                {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                                <i className="fas fa-code fa-2x mr-3"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="mt-2">
                                                    <h6 className="mb-0">Ngoding</h6>
                                                </Media>
                                            </Media>
                                        </Media>
                                        <Media className="mt-1">
                                            <Media left href="#">
                                                {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                                <i className="fas fa-music fa-2x mr-3"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="mt-2">
                                                    <h6 className="mb-0">Musik</h6>
                                                </Media>
                                            </Media>
                                        </Media>
                                        <Media className="mt-1">
                                            <Media left href="#">
                                                {/*<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />*/}
                                                <i className="fas fa-utensils fa-2x mr-3"/>
                                            </Media>
                                            <Media body>
                                                <Media heading className="mt-2">
                                                    <h6 className="mb-0">Makan</h6>
                                                </Media>
                                            </Media>
                                        </Media>

                                    </Media>
                                </Media>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </React.Fragment>
        )
    }
}

export default AppMain;