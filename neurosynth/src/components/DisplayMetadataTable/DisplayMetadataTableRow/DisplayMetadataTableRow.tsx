import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import DisplayMetadataTableRowStyles from './DisplayMetadataTableRowStyles';

export interface DisplayMetadataTableRowModel {
    metadataKey: string;
    metadataValue: any;
}

const DisplayMetadataTableRow: React.FC<DisplayMetadataTableRowModel> = (props) => {
    const classes = DisplayMetadataTableRowStyles();
    const type = typeof props.metadataValue;
    let className: 'type_other' | 'type_string' | 'type_number' | 'type_boolean' = 'type_other';
    switch (type) {
        case 'boolean':
            className = 'type_boolean';
            break;
        case 'string':
            className = 'type_string';
            break;
        case 'number':
            className = 'type_number';
            break;
        default:
            className = 'type_other';
            break;
    }

    return (
        <TableRow>
            <TableCell className={classes[className]}>{type}</TableCell>
            <TableCell>{props.metadataKey}</TableCell>
            <TableCell>{props.metadataValue?.toString()}</TableCell>
        </TableRow>
    );
};

export default DisplayMetadataTableRow;
