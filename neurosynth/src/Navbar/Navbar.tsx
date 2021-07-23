import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import NavbarStyles from './NavbarStyles';

const NavItems: { label: string; path: string }[] = [
    { label: 'Home', path: '/' },
    { label: 'Studies', path: '/studies' },
    { label: 'Login', path: 'login' },
    { label: 'Sign Up', path: 'Sign Up' },
];

const Navbar = () => {
    const classes = NavbarStyles();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

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
                    <Typography variant="h5">neurosynth</Typography>
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
                                    <ListItemText primary={navItem.label} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                    <IconButton onClick={toggleDrawer} size="medium">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Hidden>
        </AppBar>
    );
};

export default Navbar;
