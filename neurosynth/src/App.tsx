import Navbar from './Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage, StudiesPage } from './pages';

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <BrowserRouter>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/" exact={true}>
                        <LandingPage />
                    </Route>
                    <Route path="/studies">
                        <StudiesPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
