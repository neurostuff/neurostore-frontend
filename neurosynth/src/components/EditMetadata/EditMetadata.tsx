import { useAuth0 } from '@auth0/auth0-react';
import { useRef } from 'react';
import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import ToggleType, { PropertyType } from './EditMetadataRow/ToggleType/ToggleType';
import EditMetadataStyles from './EditMetadataStyles';
import DisplayMetadataTableRow, {
    DisplayMetadataTableRowModel,
} from '../DisplayMetadataTable/DisplayMetadataTableRow/DisplayMetadataTableRow';
import EditMetadataRow from './EditMetadataRow/EditMetadataRow';

interface EditMetadataModel {
    metadata: any;
    onMetadataEditChange: () => void;
}

const EditMetadata: React.FC<EditMetadataModel> = (props) => {
    const classes = EditMetadataStyles();
    const { isAuthenticated } = useAuth0();
    const rowData = Object.keys(props.metadata).map<DisplayMetadataTableRowModel>((key) => ({
        metadataKey: key,
        metadataValue: props.metadata[key],
    }));
    const [metadata, setMetadata] = useState<DisplayMetadataTableRowModel[]>(rowData);

    const handleMetadataRowEdit = () => {};

    return (
        <>
            <div style={{ margin: '0 15px' }}>hello hello hello</div>
            <div className={classes.table}>
                {rowData.map((row, i) => (
                    <EditMetadataRow key={i} metadataRow={row} index={i} onMetadataRowEdit={handleMetadataRowEdit} />
                ))}
            </div>
        </>
    );
};

export default EditMetadata;
