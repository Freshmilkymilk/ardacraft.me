import React from 'react';
import './App.css';
import {Header} from "./Margins/Header";
import {Footer} from "./Margins/Footer";
import {Images} from "./Body/Images";

export function App() {
    return (

        <div>
            <Header/>
            <Images/>
            <Footer/>
        </div>
    );
}
