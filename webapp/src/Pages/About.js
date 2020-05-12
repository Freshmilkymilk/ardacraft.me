import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    titleContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    subTitle: {
        backgroundColor: '#EEEEEE',
        padding: theme.spacing(8, 0, 6),
        marginBottom: '50px'
    },
    subTitle2: {
        padding: theme.spacing(8, 0, 6),
        marginBottom: '50px',
        marginTop: '20px'
    },
    subContent: {
        padding: theme.spacing(8, 1, 6),
        alignItems: 'center',
    }
}));


export default function About() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Our Story
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        ArdaCraft is a modded Minecraft server that seeks to recreate the world of J.R.R. Tolkien's
                        Middle-earth.
                    </Typography>
                </Container>
            </div>
            <div className={classes.subTitle}>
                <Container maxWidth="sm">
                    <Typography component="h2" variant="h5" align="center" color="textPrimary" gutterBottom>
                        The Start
                    </Typography>
                </Container>
            </div>
            <div>
                <Container maxWidth={"lg"}>
                    <Grid container spacing={1} className={classes.root}>
                        <Grid item sm={6} className={classes.paper}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Hjl-eEwZUP8"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography component="body1" variant="body1" color="textSecondary">
                                <Typography component="bodyLetter" variant="h6" color="textPrimary">A</Typography>rdaCraft
                                was created from the idea to create J.R.R. Tolkien's Middle-earth just as he would have
                                invisioned it within is literature. The original members of the server became frustrated
                                with other adaptions of Middle-earth within Minecraft and the limitations vanilla
                                Minecraft offered. Fornad started creating our base terrain in WorldPainter in 2013 and
                                gained some attraction from other community members. Thus, Fornad and Dags created what
                                is known as ArdaCraft in May of
                                2014.
                            </Typography>
                            <br/>
                            <br/>
                            <Typography component="body1" variant="body1" color="textSecondary">
                                The server orginally used vanilla Minecraft and untilized the Conquest Reforged resource
                                pack that included the use of extra block textures that came from from block metadatas.
                                The server started off as a flat freebuild world where the small number of community
                                members would create designs and concepts for the upcoming map. Minecraft would soon
                                update to remove these medata values so Dags would create his own mod called ACBlocks
                                and the creation of Middle-earth would begin.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div>
                <Container maxWidth={"lg"} style={{marginTop: '30px'}}>
                    <Grid container spacing={1} className={classes.root}>
                        <Grid item sm={6}>
                            <Typography component="h2" variant="h5" align="center" color="textPrimary" gutterBottom>
                                ArdaCraft Today
                            </Typography>
                            <br/>
                            <Typography component="body1" variant="body1" color="textSecondary">
                                After some time spent using our own mod, it became too much for Dags to keep updating and
                                developing the mod. Luckily a mod called Conquest Reforged, created by the same people
                                that created our resourcepack were developing a mod. ArdaCraft would move to this mod
                                for the forseeable future. The server continues to expand with map sections getting
                                added and lots of areas getting completed. Work will continue into the future with many
                                more builds still needing to be complete. The plans for the future aren't certian once
                                the map is done but our community will still be as great as ever.
                            </Typography>
                            <br/>
                            <br/>
                            <Typography component="body1" variant="body1" color="textSecondary">
                                ArdaCraft will continue to be free for it's users into the future.
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>

                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}