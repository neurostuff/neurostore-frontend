import { makeStyles } from '@material-ui/core';

const DisplayTableStyles = makeStyles((theme) => ({
    name: {
        width: '30%',
    },
    tableCellTextContainer: {
        maxHeight: '100px !important',
        overflowY: 'auto',
    },
    noContent: {
        color: theme.palette.warning.dark,
    },
    tableRow: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
            cursor: 'pointer',
            transition: '0.25s',
        },
    },
}));

export default DisplayTableStyles;
