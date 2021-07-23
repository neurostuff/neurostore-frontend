import Navbar from './Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage, StudiesPage } from './pages';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    pagesContainer: {
        width: '80%',
        margin: '0 auto',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <BrowserRouter>
                <Navbar></Navbar>
                <div className={classes.pagesContainer}>
                    <Switch>
                        <Route path="/" exact={true}>
                            <LandingPage />
                        </Route>
                        <Route path="/studies">
                            <StudiesPage />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
