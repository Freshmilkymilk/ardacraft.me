import React, {Component} from 'react';
import {Header} from "./Margins/Header";
import {Footer} from "./Margins/Footer";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import './App.css';

import Home from "./Pages/Home";
import Modpack from "./Pages/Modpack";
import About from "./Pages/About";
import Map from "./Pages/Map";
import FAQ from "./Pages/FAQ";
import Privacy from "./Pages/Privacy";
import Rules from "./Pages/Rules";

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/modpack" component={Modpack} exact/>
                        <Route path="/map" component={Map} exact/>
                        <Route path="/about" component={About} exact/>
                        <Route path="/faq" component={FAQ} exact/>
                        <Route path="/privacy" component={Privacy} exact/>
                        <Route path="/rules" component={Rules} exact/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}
