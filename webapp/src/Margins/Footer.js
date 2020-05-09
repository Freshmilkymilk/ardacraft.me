import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {Link as Page} from "react-router-dom";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://ardacraft.me/">
                ArdaCraft
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export function Footer() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={4} justify="space-evenly">
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        ArdaCraft
                    </Typography>
                    <ul>
                        <li>
                            <Link variant="subtitle1" color="textSecondary" component={Page} to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="https://forums.ardacraft.me" variant="subtitle1" color="textSecondary">
                                Forums
                            </Link>
                        </li>
                        <li>
                            <Link href="https://wiki.ardacraft.me" variant="subtitle1" color="textSecondary">
                                Wiki
                            </Link>
                        </li>
                        <li>
                            <Link href="https://discord.gg/fykFabG" variant="subtitle1" color="textSecondary">
                                Discord
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        Links
                    </Typography>
                    <ul>
                        <li>
                            <Link variant="subtitle1" color="textSecondary" component={Page} to={'/modpack'}>
                                Modpack
                            </Link>
                        </li>
                        <li>
                            <Link variant="subtitle1" color="textSecondary" component={Page} to={'/map'}>
                                Map
                            </Link>
                        </li>
                        <li>
                            <Link variant="subtitle1" color="textSecondary" component={Page} to={'/about'}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link variant="subtitle1" color="textSecondary" component={Page} to={'/faq'}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        Social
                    </Typography>
                    <ul>
                        <li>
                            <Link href="https://twitter.com/ArdaCraft/" target="_blank" variant="subtitle1"
                                  color="textSecondary">
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link href="https://instagram.com/ardacraft/" target="_blank" variant="subtitle1"
                                  color="textSecondary">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link href="https://youtube.com/c/ardacraftmc/" target="_blank" variant="subtitle1"
                                  color="textSecondary">
                                YouTube
                            </Link>
                        </li>
                        <li>
                            <Link href="https://reddit.com/r/ardacraft/" target="_blank" variant="subtitle1"
                                  color="textSecondary">
                                Reddit
                            </Link>
                        </li>
                        <li>
                            <Link href="https://planetminecraft.com/server/ardacraft-3119330/" target="_blank"
                                  variant="subtitle1" color="textSecondary">
                                Planet Minecraft
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/ardacraft/" target="_blank" variant="subtitle1"
                                  color="textSecondary">
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link href="https://patreon.com/ardacraft/" target="_blank" variant="subtitle1"
                                  color="textSecondary">
                                Patreon
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        Legal
                    </Typography>
                    <ul>
                        <li>
                            <Link variant="subtitle1" color="textSecondary" component={Page} to={'/privacy'}>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link variant="subtitle1" color="textSecondary" component={Page} to={'/rules'}>
                                Rules
                            </Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );

}