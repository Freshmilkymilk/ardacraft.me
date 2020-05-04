import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const myStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white',
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        color: '#585D78',
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
        color: 'white',
    },
    button: {
        color: 'white',
    }
}));

export function Header() {
    const classes = myStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                        ArdaCraft
                    </Typography>
                    <IconButton className={classes.button} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                    <IconButton className={classes.button} aria-label="display more actions" edge="end">
                        <MoreIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
