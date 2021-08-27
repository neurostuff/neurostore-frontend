import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { IEditMetadataField } from '../EditMetadataRow';

const EditMetadataNumber: React.FC<IEditMetadataField> = (props) => {
    const [value, setValue] = useState(props.value);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };
    return (
        <TextField
            style={{ width: '100%' }}
            multiline
            onChange={handleChange}
            value={value}
            type="number"
            variant="outlined"
        />
    );
};

export default EditMetadataNumber;
