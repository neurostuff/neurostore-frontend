import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { IEditMetadataField } from '../EditMetadataRow';
import EditMetadataFieldsStyles from './EditMetadataFieldsStyles';

const EditMetadataString: React.FC<IEditMetadataField> = (props) => {
    const classes = EditMetadataFieldsStyles();
    const [value, setValue] = useState(props.value.toString());

    const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <TextField multiline onChange={handleValueChange} value={value} variant="outlined" className={classes.w_100} />
    );
};

export default EditMetadataString;
