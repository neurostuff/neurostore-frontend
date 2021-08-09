import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
} from '@material-ui/core';
import { Study } from '../../gen/api';
import DisplayTableStyles from './DisplayTableStyles';

interface DisplayTableModel {
    studies: Study[];
}

const DisplayTable: React.FC<DisplayTableModel> = (props) => {
    console.log(props);

    const classes = DisplayTableStyles();
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
                        <TableRow key={index} className={classes.tableRow}>
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
                <TableFooter>
                    <TableRow></TableRow>
                </TableFooter>
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
