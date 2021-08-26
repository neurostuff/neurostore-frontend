import { TextField } from '@material-ui/core';
import { IEditMetadataField } from '../EditMetadataRow';

const EditMetadataNumber: React.FC<IEditMetadataField> = (props) => {
    return <TextField style={{ width: '100%' }} type="number" variant="outlined" />;
};

export default EditMetadataNumber;
