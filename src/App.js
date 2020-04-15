import React, {Component} from 'react';
import './sass/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from "./component/AppNav";
import AppHeader from "./component/AppHeader";
import AppMain from "./component/AppMain";
import AppFooter from "./component/AppFooter";
import {Route, Switch} from "react-router-dom";
import {Col, Container, Media, Navbar, NavbarBrand, NavbarText, Row} from "reactstrap";
import PropTypes from "prop-types";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <AppNav/>
                <AppHeader/>
                <AppMain/>
                <AppFooter/>
            </React.Fragment>
        );
    }
}

class AppRouter extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" component={App} exact={true}/>
                </Switch>
            </React.Fragment>
        )
    }
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

Media.propTypes = {
    body: PropTypes.bool,
    bottom: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    heading: PropTypes.bool,
    left: PropTypes.bool,
    list: PropTypes.bool,
    middle: PropTypes.bool,
    object: PropTypes.bool,
    right: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    top: PropTypes.bool,
};

export default AppRouter;