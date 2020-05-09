import React from 'react';
import {Header} from "./Margins/Header";
import {Footer} from "./Margins/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

import Home from "./Pages/Home";
import Modpack from "./Pages/Modpack";
import About from "./Pages/About";
import Map from "./Pages/Map";
import FAQ from "./Pages/FAQ";
import Privacy from "./Pages/Privacy";
import Rules from "./Pages/Rules";

export default function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/modpack" component={Modpack}/>
                    <Route exact path="/map" component={Map}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/faq" component={FAQ}/>
                    <Route exact path="/privacy" component={Privacy}/>
                    <Route exact path="/rules" component={Rules}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}
