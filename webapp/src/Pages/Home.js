import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {Link} from "react-router-dom";

import '../App.css';

export default function Home() {

    return (
        <div>
            <Images/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="home-mtn">
                <path fill="white"
                      d="M0,0L205.7,64L411.4,96L617.1,224L822.9,256L1028.6,192L1234.3,160L1440,288L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"/>
            </svg>
        </div>
    );
}

export function Images() {
    const styles = {
        paperContainer: {
            height: 1080,
            backgroundImage: `url(${"https://i.imgur.com/BXphPfC.jpg"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: 'auto'
        }
    };

    return (
        <div>
            <Paper style={styles.paperContainer}>
                <div className={"home-text"}>
                    <Text/>
                </div>
            </Paper>
        </div>
    )
}

export function Text() {
    return (
        <div>
            <Typography variant={"h4"} align={"center"} color={"textPrimary"}>
                Founded in 2014,
            </Typography>
            <Typography variant={"subtitle1"} align={"center"} color={"textPrimary"}>
                ArdaCraft seeks to recreate J.R.R. Tolkien's Middle-earth in Minecraft
            </Typography>
            <div className={"home-button"}>
                <Button variant="contained" size="medium" component={Link} to={"/modpack"}>
                    Join now!
                </Button>
            </div>
        </div>
    );

}