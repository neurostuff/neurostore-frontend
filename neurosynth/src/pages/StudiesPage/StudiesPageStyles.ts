import { makeStyles } from '@material-ui/core';

const StudiesPageStyles = makeStyles({
    studiesPageContainer: {
        margin: '3% 0',
    },
    dataGridContainer: {
        height: '600px',
        width: '100%',
        '& .MuiDataGrid-row, & .MuiDataGrid-renderingZone': {
            maxHeight: 'none !important',
        },
        '& .MuiDataGrid-cell': {
            maxHeight: 'none !important',
            lineHeight: '20px !important',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'break-spaces',
        },
    },
});

export default StudiesPageStyles;
