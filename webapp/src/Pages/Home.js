import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";

import '../App.css';

export default class Home extends Component {
    render() {

        return (
            <div>

                {this.images()}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="home-mtn">
                    <path fill="white" fill-opacity="1" d="M0,0L205.7,64L411.4,96L617.1,224L822.9,256L1028.6,192L1234.3,160L1440,288L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"/>
                </svg>
            </div>
                )
    }

    images() {
        const styles = {
            paperContainer: {
                height: 1080,
                backgroundImage: `url(${"https://i.imgur.com/BXphPfC.jpg"})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
        };

        return (
            <Paper style={styles.paperContainer}>
            </Paper>
        )
    }

}