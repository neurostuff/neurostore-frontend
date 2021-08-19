import { makeStyles } from '@material-ui/core';

const StudyPageStyles = makeStyles((theme) => ({
    buttonContainer: {
        marginBottom: '15px',
    },
    muted: {
        color: theme.palette.muted.main,
    },
    metadataContainer: {
        maxHeight: '70%',
        msOverflowY: 'auto',
    },
}));

export default StudyPageStyles;
