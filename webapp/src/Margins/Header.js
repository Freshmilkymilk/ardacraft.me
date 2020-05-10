import React from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import {Link} from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

export function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <SideDrawer/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        ArdaCraft
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export function SideDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListSubheader componenet={"div"}>
                    ArdaCraft
                </ListSubheader>
                <ListItem button component={Link} to={"/"}>
                    <ListItemText primary={"Home"}/>
                </ListItem>
                <ListItemLink href="https://forums.ardacraft.me/" rel={"noopener"}>
                    <ListItemText primary={"Forums"}/>
                </ListItemLink>
                <ListItemLink href="https://wiki.ardacraft.me/" rel={"noopener"}>
                    <ListItemText primary={"Wiki"}/>
                </ListItemLink>
                <ListItemLink href="https://discord.gg/fykFabG" target={"_blank"} rel={"noopener"}>
                    <ListItemText primary={"Discord"}/>
                </ListItemLink>
            </List>
            <Divider/>
            <List>
                <ListSubheader component={"div"}>
                    Website Pages
                </ListSubheader>
                <ListItem button component={Link} to={"/modpack"}>
                    <ListItemText primary={"Modpack"}/>
                </ListItem>
                <ListItem button component={Link} to={"/map"}>
                    <ListItemText primary={"Map"}/>
                </ListItem>
                <ListItem button component={Link} to={"/about"}>
                    <ListItemText primary={"About"}/>
                </ListItem>
                <ListItem button component={Link} to={"/faq"}>
                    <ListItemText primary={"FAQ"}/>
                </ListItem>
                <ListItem button component={Link} to={"/rules"}>
                    <ListItemText primary={"Rules"}/>
                </ListItem>
                <ListItem button component={Link} to={"/privacy"}>
                    <ListItemText primary={"Privacy Policy"}/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListSubheader componenet={"div"}>
                    Links
                </ListSubheader>
                <ListItemLink button href="https://twitter.com/ArdaCraft_/" target={"_blank"} rel={"noopener"}>
                    <ListItemText primary={"Twitter"}/>
                </ListItemLink>
                <ListItemLink href="https://instagram.com/ardacraft/" target={"_blank"} rel={"noopener"}>
                    <ListItemText primary={"Instagram"}/>
                </ListItemLink>
                <ListItemLink href="https://youtube.com/c/ardacraftmc/" target={"_blank"} rel={"noopener"}>
                    <ListItemText primary={"Youtube"}/>
                </ListItemLink>
                <ListItemLink href="https://reddit.com/r/ardacraft/" target={"_blank"} rel={"noopener"}>
                    <ListItemText primary={"Reddit"}/>
                </ListItemLink>
                <ListItemLink href="https://planetminecraft.com/server/ardacraft-3119330/" target={"_blank"} rel={"noopener"}>
                    <ListItemText primary={"Planet Minecraft"}/>
                </ListItemLink>
                <ListItemLink href="https://github.com/ardacraft/" target={"_blank"} rel={"noopener"}>
                    <ListItemText primary={"GitHub"}/>
                </ListItemLink>
                <ListItemLink href="https://patreon.com/ardacraft/" target={"_blank"} rel={"noopener"}>
                    <ListItemText primary={"Patreon"}/>
                </ListItemLink>
            </List>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <MenuIcon onClick={toggleDrawer(anchor, true)}/>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}