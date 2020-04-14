import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fotoSMA from '../img/fotoSMA3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Row} from "reactstrap";

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Adam Arthur Faizal',
        }
    }

    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <Container className="themed-container" fluid={true}>
                        <Row>
                            <Col sm="4" className="header-kiri">
                                <img src={fotoSMA} alt="Arthur" className="rounded-circle"/>
                                <section>
                                    <h1>Data Pribadi</h1>

                                </section>
                            </Col>
                            <Col sm="8" className="header-kanan">
                                <h1 className="display-3 font-weight-bold">{this.state.name}</h1>
                                <p>
                                    <Button color="info">Web Developer</Button>{' '}
                                    <Button color="info">Mobile-Apps Developer</Button>{' '}
                                    <Button color="info">Cyber Security</Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </React.Fragment>
        )
    }
}

Container.propTypes = {
    fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    // applies .container-fluid class if bool or .container-{breakpoint} if string
}

Row.propTypes = {
    noGutters: PropTypes.bool,
    // see https://reactstrap.github.io/components/form Form Grid with Form Row
    form: PropTypes.bool,
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
        // example size values:
        // 12 || "12" => col-12 or col-`width`-12
        // auto => col-auto or col-`width`-auto
        // true => col or col-`width`
        order: stringOrNumberProp,
        offset: stringOrNumberProp
    })
]);

Col.propTypes = {
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    // override the predefined width (the ones above) with your own custom widths.
    // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
    widths: PropTypes.array,
}

export default AppHeader;