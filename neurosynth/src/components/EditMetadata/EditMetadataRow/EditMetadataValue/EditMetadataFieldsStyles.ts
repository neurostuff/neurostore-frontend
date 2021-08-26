import { makeStyles } from '@material-ui/core';

const EditMetadataFieldsStyles = makeStyles((themes) => ({
    'div[contenteditable="true"]': {
        border: '1px dashed #aaa',
        borderRadius: '5px',
        padding: '1rem',
    },
    checkedTrue: {
        color: themes.palette.primary.main,
    },
    checkedFalse: {
        color: themes.palette.secondary.main,
    },
}));

export default EditMetadataFieldsStyles;
