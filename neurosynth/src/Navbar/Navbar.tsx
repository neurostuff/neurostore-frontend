import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
    IconButton,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';

const useStyles = makeStyles((theme) => {
    return {
        link: {
            textDecoration: 'none',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 18px',
            color: theme.palette.primary.contrastText,
        },
        toolbar: {
            // "height: 1px" is a workaround due to a bug where the child cannot inherit the min-height property of the parent:
            // https://stackoverflow.com/questions/8468066/child-inside-parent-with-min-height-100-not-inheriting-height
            height: '1px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        navLinksContainer: {
            height: '100%',
            display: 'flex',
        },
        button: {
            margin: '0',
            padding: '0',
            '& span': {
                height: '100%',
            },
        },
        list: {
            width: '240px',
        },
        active: {
            color: theme.palette.secondary.main,
        },
    };
});

const NavItems: { label: string; path: string }[] = [
    { label: 'Home', path: '/' },
    { label: 'Studies', path: '/studies' },
    { label: 'Login', path: 'login' },
    { label: 'Sign Up', path: 'Sign Up' },
];

const Navbar = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const classes = useStyles();

    const toggleDrawer = () => {
        setDrawerIsOpen((prevState) => !prevState);
    };

    return (
        <AppBar position="static" elevation={0}>
            <Hidden smDown>
                <Toolbar className={classes.toolbar}>
                    <div>
                        <Typography variant="h5">neurosynth</Typography>
                    </div>
                    <div className={classes.navLinksContainer}>
                        {NavItems.map((navItem, index) => (
                            <Button key={index} className={classes.button}>
                                <NavLink
                                    className={classes.link}
                                    activeClassName={classes.active}
                                    exact
                                    to={navItem.path}
                                >
                                    {navItem.label}
                                </NavLink>
                            </Button>
                        ))}
                    </div>
                </Toolbar>
            </Hidden>
            <Hidden mdUp>
                <Toolbar className={classes.toolbar}>
                    <Drawer
                        anchor="left"
                        open={drawerIsOpen}
                        onClose={toggleDrawer}
                    >
                        <List className={classes.list}>
                            {NavItems.map((navItem, index) => (
                                <ListItem
                                    button
                                    key={index}
                                    component={NavLink}
                                    to={navItem.path}
                                    onClick={toggleDrawer}
                                >
                                    {/* <ListItemText
                                        primary={navItem.label}
                                    ></ListItemText> */}
                                    <ListItemText primary={navItem.label} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                    <IconButton onClick={toggleDrawer} size="medium">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5">neurosynth</Typography>
                </Toolbar>
            </Hidden>
        </AppBar>
    );
};

export default Navbar;
