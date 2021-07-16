import logo from '../../assets/images/logo.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Inter',
        width: '650px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '100%',
        },
    },
    title: {
        fontSize: '2.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0',
            fontSize: '1.5rem',
        },
    },
    logo: {
        width: '120px',
        [theme.breakpoints.down('sm')]: {
            width: '100px',
        },
    },
    descriptor: {
        fontSize: '1.5rem',
        fontFamily: 'Roboto',
        color: 'darkgray',
        width: '650px',
        margin: '2% 0',
        lineHeight: '2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            margin: '8% 0',
            textAlign: 'center',
            width: '80%',
        },
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.contentContainer}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>welcome to neurosynth</h1>
                <div>
                    <img className={classes.logo} src={logo} alt="Logo" />
                </div>
            </div>
            <div className={classes.descriptor}>
                neurosynth is a platform for large-scale, automated synthesis of
                functional magnetic resonance imaging (fMRI) data.
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LandingPage;
