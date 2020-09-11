import React, {Component} from "react";
import Iframe from 'react-iframe';

import '../App.css';
import Button from "@material-ui/core/Button";

export default class Map extends Component {
    render() {

        return (
            <div>
                <div className="map">
                    <div className="map-container">
                        <Iframe url="https://ardacraft.io/map" title="ArdaCraft Dynmap" frameBorder="0"/>
                    </div>
                </div>
                <div className="map-button">
                    <Button variant="contained" size="large" href="https://ardacraft.io/map" target="_blank">View Larger</Button>
                </div>
            </div>
        );
    }
}