import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import DisplayTable from '../../components/DisplayStudiesTable/DisplayStudiesTable';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import API, { StudyApiResponse } from '../../utils/api';

const StudiesPage = () => {
    const [studies, setStudies] = useState<StudyApiResponse[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { getAccessTokenSilently } = useAuth0();

    const getStudies = useCallback(
        async (searchStr: string | undefined) => {
            API.Services.StudiesService.studiesGet(searchStr, 'name')
                .then((res) => {
                    setStudies(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        [getAccessTokenSilently],
    );

    const handleOnSearch = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
    };

    useEffect(() => {
        getStudies(searchTerm === '' ? undefined : searchTerm);
    }, [getStudies, searchTerm]);

    const res = (studies as any).results;
    console.log(res);

    return (
        <div>
            <Typography variant="h4">Studies Page</Typography>

            <SearchBar onSearch={handleOnSearch} />
            <DisplayTable studies={res ? res : []} />
        </div>
    );
};
export default StudiesPage;
