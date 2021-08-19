import { useAuth0 } from '@auth0/auth0-react';
import { useRef } from 'react';
import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import ToggleType, {
    PropertyType,
} from '../../../../components/ToggleType/ToggleType';
import EditMetadataStyles from './EditMetadataStyles';

interface EditMetadataModel {
    editKey: string;
    editValue: number | string | boolean;
    valueType: 'number' | 'string' | 'boolean';
}

const EditMetadata: React.FC<EditMetadataModel> = (props) => {
    const classes = EditMetadataStyles();
    const { isAuthenticated } = useAuth0();

    const [disabled, setDisabled] = useState(true);
    const [valueType, setValueType] = useState(props.valueType);
    const input = useRef(props.editValue);

    const onChange = () => {};

    const handleToggle = (type: PropertyType): void => {
        console.log(type);

        return;
    };

    const typeArg = typeof props.editValue;
    const propertyType = typeArg === 'object' ? PropertyType.UNKNOWN : typeArg;

    return (
        <div style={{ display: 'flex', margin: '1rem 0' }}>
            {isAuthenticated && (
                <div style={{ marginRight: '15px' }}>
                    <ToggleType
                        onToggle={handleToggle}
                        type={propertyType as PropertyType}
                    />
                </div>
            )}
            <div>
                <div style={{ color: 'green' }}>
                    <ContentEditable
                        disabled={false}
                        html={props.editKey}
                        onChange={onChange}
                    ></ContentEditable>
                </div>
                <div style={{ color: 'darkgray' }}>
                    <ContentEditable
                        disabled={false}
                        html={
                            props.editValue?.toString() === undefined
                                ? 'UNDEFINED'
                                : props.editValue.toString()
                        }
                        onChange={onChange}
                    ></ContentEditable>
                </div>
            </div>
        </div>
    );
};

export default EditMetadata;
