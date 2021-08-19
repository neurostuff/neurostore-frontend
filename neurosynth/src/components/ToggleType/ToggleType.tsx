import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import ToggleTypeStyles from './ToggleTypeStyles';

interface ToggleTypeModel {
    onToggle: (type: PropertyType) => void;
    type: PropertyType;
}

export enum PropertyType {
    STRING = 'string',
    NUMBER = 'number',
    BOOLEAN = 'boolean',
    UNKNOWN = 'unknown',
}

const ToggleType: React.FC<ToggleTypeModel> = (props) => {
    const classes = ToggleTypeStyles();
    const [type, setType] = useState<PropertyType>(props.type);

    const handleSetType = (
        event: React.ChangeEvent<{
            name?: string | undefined;
            value: unknown;
        }>,
        child: React.ReactNode,
    ) => {
        const selected = event.target.value as PropertyType;

        setType(selected);
        props.onToggle(selected);
    };

    const myClass:
        | 'type_number'
        | 'type_boolean'
        | 'type_string'
        | 'type_unknown' = `type_${type}`;

    return (
        <FormControl className={classes.metadataProperty} variant="outlined">
            <Select
                className={classes[myClass]}
                value={type}
                onChange={handleSetType}
            >
                <MenuItem value="unknown">NONE</MenuItem>
                <MenuItem value="string">STRING</MenuItem>
                <MenuItem value="number">NUMBER</MenuItem>
                <MenuItem value="boolean">BOOLEAN</MenuItem>
            </Select>
        </FormControl>
        // <ToggleButtonGroup value={type} onChange={handleSetType} exclusive>
        //     <ToggleButton value="string">String</ToggleButton>
        //     <ToggleButton value="number">Number</ToggleButton>
        //     <ToggleButton value="boolean">Boolean</ToggleButton>
        // </ToggleButtonGroup>
    );
};

export default ToggleType;
