import { makeStyles } from '@material-ui/core';

const ToggleTypeStyles = makeStyles({
    type_string: {
        color: 'blue',
        '& fieldset': {
            borderColor: 'blue',
        },
        '&.Mui-focused > fieldset': {
            borderColor: 'blue !important',
        },
    },
    type_number: {
        color: 'orange',
        '& fieldset': {
            borderColor: 'orange',
        },
        '&.Mui-focused > fieldset': {
            borderColor: 'orange !important',
        },
    },
    type_boolean: {
        color: 'green',
        '& fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused > fieldset': {
            borderColor: 'green !important',
        },
    },
    type_other: {
        color: 'rgba(0, 0, 0, 0.23)',
        '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
        },
        '&.Mui-focused > fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.23) !important',
        },
    },
    toggle_item: {
        minWidth: '118px',
    },
    toggleItemContainer: {
        height: '100%',
        display: 'table-cell',
        verticalAlign: 'middle',
    },
});

export default ToggleTypeStyles;
