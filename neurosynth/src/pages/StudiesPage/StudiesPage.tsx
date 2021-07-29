import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { DataGrid, GridColDef, GridRowsProp } from '@material-ui/data-grid';
import StudiesPageStyles from './StudiesPageStyles';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../../utils/api';

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Name', width: 400 },
    { field: 'col2', headerName: 'Description', width: 250 },
    { field: 'col3', headerName: 'Authors', width: 400 },
];

const optionsPerPage: number[] = [10, 25, 50];

const StudiesPage = () => {
    const classes = StudiesPageStyles();
    const [studies, setStudies] = useState<GridRowsProp>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { getAccessTokenSilently } = useAuth0();

    const getStudies = useCallback(async (searchStr: string | undefined) => {
        let token;
        try {
            token = await getAccessTokenSilently();
        } catch (e) {
            token = '';
        }

        API(token)
            .StudiesService.studiesGet(searchStr)
            .then((res) => {
                const rows: GridRowsProp = res?.data.map((studyData) => {
                    return {
                        id: studyData.id,
                        col1: studyData.name,
                        col2: studyData.description,
                        col3: (studyData.metadata as any)?.authors,
                    };
                });
                setStudies(rows);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleOnSearch = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
    };

    useEffect(() => {
        getStudies(searchTerm === '' ? undefined : searchTerm);
    }, [getStudies, searchTerm]);

    return (
        <div className={classes.studiesPageContainer}>
            <Typography variant="h4">Studies Page</Typography>

            <SearchBar onSearch={handleOnSearch} />
            <div className={classes.dataGridContainer}>
                <DataGrid
                    rows={studies}
                    columns={columns}
                    rowsPerPageOptions={optionsPerPage}
                ></DataGrid>
            </div>
        </div>
    );
};
export default StudiesPage;
