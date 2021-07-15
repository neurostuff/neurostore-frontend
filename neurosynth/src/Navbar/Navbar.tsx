import classes from "./Navbar.module.css";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar className={classes['buttons-container']}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Studies</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;