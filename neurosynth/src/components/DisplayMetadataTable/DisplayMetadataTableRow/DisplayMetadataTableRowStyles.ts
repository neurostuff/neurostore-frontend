import { makeStyles } from '@material-ui/core';

const DisplayMetadataTableRowStyles = makeStyles((theme) => ({
    type_string: {
        color: 'blue',
    },
    type_number: {
        color: 'orange',
    },
    type_boolean: {
        color: 'green',
    },
    type_other: {
        color: 'rgba(0, 0, 0, 0.23)',
    },
}));

export default DisplayMetadataTableRowStyles;
