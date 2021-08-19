import { Switch, Route } from 'react-router-dom';
import { LandingPage, StudiesPage, StudyPage } from '../';
import BaseNavigationStyles from './BaseNavigationStyles';

const BaseNavigation = () => {
    const classes = BaseNavigationStyles();

    return (
        <>
            <div className={classes.pagesContainer}>
                <Switch>
                    <Route path="/" exact={true}>
                        <LandingPage />
                    </Route>
                    <Route path="/studies" exact={true}>
                        <StudiesPage />
                    </Route>
                    <Route path="/studies/:studyId">
                        <StudyPage />
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default BaseNavigation;
