import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    titleContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    heroContent: {
        backgroundColor: '#EEEEEE',
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    subContent: {
        padding: theme.spacing(8, 1, 6)
    }
}));

export default function Modpack() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.titleContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        How to Join
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        To join the ArdaCraft server you must first own a copy of the Minecraft Java Edition on PC. No
                        other platforms will be able to join. You then must install the modpack. This can be done two
                        ways - via the launcher or installing the required mods yourself.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary"
                                        href="#launcher">
                                    Launcher Guide
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"
                                        href="#manual">
                                    Self-install Guide
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <div className={classes.heroContent} id="launcher">
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Launcher
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        This is the primary way to install the modpack. The launcher allows for full control of mods,
                        and allows users to pick optional mods they may want to have.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={1} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary"
                                        href="https://github.com/ArdaCraft/ACLauncher/releases/latest" target="_blank">
                                    Download Launcher
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <div>
                <Container className={classes.subContent}>
                    <Typography component="h2" variant="h4" color="textPrimary">
                        How to use the launcher:
                    </Typography>
                    <Typography component="body1" variant="body1" color="textSecondary">
                                <ol>
                                    <li>
                                        Run your downloaded launcher. <strong>You may get a message that says this is
                                        not a
                                        trusted
                                        program. Run it anyway.</strong>
                                        <ul>
                                            <li>
                                                Note that the ArdaCraft Launcher will default install to a folder
                                                called <code>ArdaCraft
                                                Launcher</code> in
                                                your <code>C:\Users\%yourusername\Documents</code> folder.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Once it is installed, select the Modpack which you prefer. The <code>ArdaCraft
                                        Modpack
                                        1.12.2</code> pack is the preferred version as highlighted below. The Conquest
                                        Reforged
                                        versions
                                        do not include the ArdaCraft <a
                                        href="https://github.com/ArdaCraft/AC_Overlay/releases/latest">Resourcepack</a>,
                                        so if
                                        you
                                        plan
                                        on joining the ArdaCraft server be sure to pick one of the ArdaCraft Modpack's.
                                    </li>
                                </ol>
                                <Container>
                                    <Grid container xl>
                                        <Grid item>
                                    <img src="https://i.imgur.com/uTo872D.jpg" alt="alt text"/>
                                        </Grid>
                                    </Grid>
                                </Container>
                                <ol start="3">
                                    <li>
                                        Log in with your Minecraft account. This process uses the Mojang authentication
                                        service
                                        and
                                        we
                                        do not see any of your information.
                                    </li>
                                    <li>
                                        You will be given a screen showing optional mods that are in the pack. None of
                                        these
                                        mods
                                        are
                                        required to join the server and you may install mods as you wish.
                                    </li>
                                </ol>
                                <Container>
                                    <Grid container xl>
                                        <Grid item>
                                    <img src="https://i.imgur.com/11QE6mh.png" alt="alt text"/>
                                        </Grid>
                                    </Grid>
                                </Container>
                                <ol start="5">
                                    <li>
                                        The launcher may take several minutes to download all the needed files depending
                                        on your
                                        connection.
                                    </li>
                                    <li>
                                        Once everything is installed Minecraft will start. <strong>Your game may freeze
                                        on
                                        startup
                                        and
                                        you may have a (not responding) message, this is normal just let it
                                        load.</strong>
                                    </li>
                                    <li>
                                        You now have everything you need to join the server. The IP
                                        is <code>mc.ardacraft.me</code> and
                                        you can view other conquest servers with the arrow on the right hand side of the
                                        Multiplayer
                                        page.
                                    </li>
                                </ol>
                    </Typography>
                </Container>
            </div>
            <div className={classes.heroContent} id="manual">
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Self-Install
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        This is not the recommended way to join the server, but if you are having troubles with the
                        option above, you can install everything yourself. This comes with all the
                        mods you can install via our launcher. You can pick and choose which ones you want to use
                        with your install.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={1} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary"
                                        href="https://github.com/ArdaCraft/modpack/releases/latest" target="_blank">
                                    Download Self-Install Files
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <div>
                <Container className={classes.subContent}>
                    <Typography component="h2" variant="h4" color="textPrimary">
                        How to self-install:
                    </Typography>
                    <Typography component="body1" variant="body1" color="textSecondary">
                        <ol>
                            <li>
                                First install <a
                                href="http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.12.2.html">Forge</a> for
                                Minecraft 1.12.2.
                            </li>
                            <li>
                                Run Minecraft with the Forge profile enabled.
                            </li>
                            <li>
                                Download Conquest Reforged <a
                                href="https://minecraft.curseforge.com/projects/conquest-reforged/files">here</a>
                            </li>
                            <li>
                                Put the <code>ConquestReforged-mc1.12.2.jar</code> in your
                                Minecraft's <code>mods</code> folder.
                            </li>
                            <li>
                                Download Optifine for 1.12.2 <a href="https://optifine.net/downloads">here</a>.
                            </li>
                            <li>
                                Put the <code>OptiFine_1.12.2.jar</code> into your Minecraft's <code>mods</code> folder.
                            </li>
                            <li>Download the ArdaCraft Resource Pack <a
                                href="https://github.com/ArdaCraft/AC_Overlay/releases/latest">here</a> as well as the
                                Conquest Resource Pack <a
                                    href="https://minecraft.curseforge.com/projects/conquest-reforged-resource-pack/files">here</a> and
                                put them in your <code>resourcepacks</code> folder.
                            </li>
                            <li>
                                Once you are on the main menu screen, go to <code>Options</code> then <code>Resource
                                Packs...</code> and move the <code>AC_Overlay.zip</code> file above the <code>Conquest
                                Reforged.zip</code>
                                <ul>
                                    <li>This is what your Resource Packs page should look like:</li>
                                </ul>
                            </li>
                        </ol>
                        <Container>
                            <Grid container xl justify="center">
                                <Grid item>
                            <img src="https://i.imgur.com/fO8umXF.png" alt="alt text"/>
                                </Grid>
                            </Grid>
                        </Container>
                        <ol start="9">
                            <li>
                                You now have everything you need to join the server. The IP
                                is <code>mc.ardacraft.me</code>.
                            </li>
                        </ol>
                    </Typography>
                </Container>
            </div>
        </div>
    );
}