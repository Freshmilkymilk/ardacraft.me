import React, {Component} from 'react';
import '../App.css';
import Paper from "@material-ui/core/Paper";

export default class Home extends Component {
    render() {

        return (
            <div>
                {this.images()}
            </div>
        )
    }

    images() {
        const styles = {
            paperContainer: {
                height: 1080,
                backgroundImage: `url(${"https://i.imgur.com/BXphPfC.jpg"})`
            }
        };

        return (
            <Paper style={styles.paperContainer}>
            </Paper>
        )
    }
}