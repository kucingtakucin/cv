import React, {Component} from 'react';
import './sass/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from "./component/AppNav";
import AppHeader from "./component/AppHeader";
import AppMain from "./component/AppMain";
import AppFooter from "./component/AppFooter";
import {Route, Switch} from "react-router-dom";

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

export default AppRouter;