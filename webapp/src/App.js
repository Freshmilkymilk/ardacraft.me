import React, {Component} from 'react';
import './App.css';
import {Header} from "./Margins/Header";
import {Footer} from "./Margins/Footer";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home";

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}
