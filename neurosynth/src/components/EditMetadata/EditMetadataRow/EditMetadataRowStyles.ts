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
    'div[contenteditable="true"]': {
        border: '1px dashed #aaa',
        borderRadius: '5px',
        padding: '1rem',
    },
}));

export default EditMetadataRowStyles;
