import logo from '../../assets/images/logo.png';
import utLogo from '../../assets/images/utlogo.png';
import nihLogo from '../../assets/images/nihlogo.png';
import mcgillLogo from '../../assets/images/mcgilllogo.png';
import fiuLogo from '../../assets/images/fiulogo.png';
import oxfordLogo from '../../assets/images/oxfordlogo.png';
import stanfordLogo from '../../assets/images/stanfordlogo.png';
import origamiLogo from '../../assets/images/origamilogo.png';

import { Divider } from '@material-ui/core';
import LandingPageStyles from './LandingPageStyles';

const LandingPage = () => {
    const classes = LandingPageStyles();
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
            <Divider className={classes.divider} />
            <div className={classes.sponsorContainer}>
                <div className={classes.sponsorsImgContainer}>
                    <div className={classes.sponsorLogoContainer}>
                        <img
                            src={utLogo}
                            className={classes.sponsorLogo}
                            alt="UT Logo"
                        />
                    </div>
                    <div className={classes.sponsorLogoContainer}>
                        <img
                            src={mcgillLogo}
                            className={classes.sponsorLogo}
                            alt="Mcgill Logo"
                        />
                    </div>
                    <div className={classes.sponsorLogoContainer}>
                        <img
                            src={nihLogo}
                            className={classes.sponsorLogo}
                            alt="NIH Logo"
                        />
                    </div>
                    <div className={classes.sponsorLogoContainer}>
                        <img
                            src={fiuLogo}
                            className={classes.sponsorLogo}
                            alt="FIU Logo"
                        />
                    </div>
                    <div className={classes.sponsorLogoContainer}>
                        <img
                            src={oxfordLogo}
                            className={classes.sponsorLogo}
                            alt="Oxford Logo"
                        />
                    </div>
                    <div className={classes.sponsorLogoContainer}>
                        <img
                            src={stanfordLogo}
                            className={classes.sponsorLogo}
                            alt="Stanford Logo"
                        />
                    </div>
                    <div className={classes.sponsorLogoContainer}>
                        <img
                            src={origamiLogo}
                            className={classes.sponsorLogo}
                            alt="Origami Lab Logo"
                        />
                    </div>
                </div>
                <Divider className={classes.divider} />
                <div className={classes.nihAwardText}>
                    Supported by NIH award 5R01MH096906-06
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
