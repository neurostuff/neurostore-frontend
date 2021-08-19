import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ReadOnly, Study } from '../../gen/api';
import { StudyApiResponse } from '../../utils/api';
import DisplayTableStyles from './DisplayTableStyles';

interface DisplayTableModel {
    studies: StudyApiResponse[];
}

const DisplayTable: React.FC<DisplayTableModel> = (props) => {
    const history = useHistory();
    const classes = DisplayTableStyles();

    const handleSelectTableRow = (row: Study & ReadOnly) => {
        history.push(`/studies/${row.id}`);
    };

    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Authors</TableCell>
                        <TableCell>Journal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.studies.map((row, index) => (
                        <TableRow
                            key={index}
                            className={classes.tableRow}
                            onClick={() => handleSelectTableRow(row)}
                        >
                            <TableCell className={`${classes.name}`}>
                                <div className={classes.tableCellTextContainer}>
                                    {row.name}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableCellTextContainer}>
                                    {(row.metadata as any)?.authors || (
                                        <span className={classes.noContent}>
                                            No Author(s)
                                        </span>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableCellTextContainer}>
                                    {(row.metadata as any)?.journal_name || (
                                        <span className={classes.noContent}>
                                            No Journal
                                        </span>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {props.studies.length === 0 && (
                <div className={classes.noContent}>
                    <br />
                    No results
                </div>
            )}
        </TableContainer>
    );
};

export default DisplayTable;
