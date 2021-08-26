import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { IEditMetadataField } from '../EditMetadataRow';
import EditMetadataFieldsStyles from './EditMetadataFieldsStyles';

const EditMetadataString: React.FC<IEditMetadataField> = (props) => {
    console.log('rendered string editor');

    const classes = EditMetadataFieldsStyles();
    const [value, setValue] = useState(props.value.toString());
    const handleEdit = (event: ContentEditableEvent) => {
        setValue(event.target.value);
    };

    const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        // <ContentEditable
        //     className={classes['div[contenteditable="true"]']}
        //     html={value}
        //     onChange={handleEdit}
        // ></ContentEditable>
        <TextField style={{ width: '100%' }} multiline onChange={handleValueChange} value={value} variant="outlined" />
    );
};

export default EditMetadataString;
