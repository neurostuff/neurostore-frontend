import { makeStyles } from '@material-ui/core';

const EditMetadataRowStyles = makeStyles((themes) => ({
    tableRow: {
        display: 'table-row',
        height: '100%',
    },
    tableCell: {
        display: 'table-cell',
        height: '100%',
        verticalAlign: 'middle',
    },
    spacer: {
        height: '10px',
    },
    noContent: {
        color: themes.palette.warning.dark,
    },
}));

export default EditMetadataRowStyles;
