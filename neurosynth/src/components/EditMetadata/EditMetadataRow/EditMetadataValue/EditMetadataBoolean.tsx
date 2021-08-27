import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { useState } from 'react';
import { IEditMetadataField } from '../EditMetadataRow';
import EditMetadataFieldsStyles from './EditMetadataFieldsStyles';

const EditMetadataBoolean: React.FC<IEditMetadataField> = (props) => {
    const classes = EditMetadataFieldsStyles();
    const [state, setState] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setState(checked);
        props.onEdit(checked);
    };

    return (
        <FormGroup>
            <FormControlLabel
                className={state ? classes.checkedTrue : classes.checkedFalse}
                control={<Switch onChange={handleChange} color="primary" size="medium" checked={state} />}
                label={state.toString()}
            />
        </FormGroup>
    );
};

export default EditMetadataBoolean;
