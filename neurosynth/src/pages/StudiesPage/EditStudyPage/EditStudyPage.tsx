import { Button, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { EditMetadata } from '../../../components';
import API, { StudyApiResponse } from '../../../utils/api';
import EditStudyPageStyles from './EditStudyPageStyles';

const EditStudyPage = () => {
    const classes = EditStudyPageStyles();
    const [study, setStudy] = useState<StudyApiResponse>();
    const [isChanged, setIsChanged] = useState(false);
    const [metadata, setMetadata] = useState({});
    const history = useHistory();
    const params: { studyId: string } = useParams();

    const getStudy = useCallback((id: string) => {
        API.Services.StudiesService.studiesIdGet(id)
            .then((res) => {
                setStudy(res.data);
            })
            .catch(() => {});
    }, []);

    const handleMetadataEditChange = () => {
        setIsChanged(true);
    };

    const handleOnCancel = (event: React.MouseEvent) => {
        history.push(`/studies/${params.studyId}`);
    };

    const handleOnSave = (event: React.MouseEvent) => {};

    useEffect(() => {
        if (params.studyId) {
            getStudy(params.studyId);
        }
    }, [params.studyId]);

    return (
        <div style={{ height: '100%' }}>
            <div className={classes.stickyButtonContainer}>
                <Button
                    onClick={handleOnCancel}
                    disabled={!isChanged}
                    className={`${classes.saveButton} ${classes.button}`}
                    variant="outlined"
                >
                    Save Changes
                </Button>
                <Button
                    onClick={handleOnCancel}
                    className={`${classes.cancelButton} ${classes.button}`}
                    variant="outlined"
                >
                    Cancel
                </Button>
            </div>
            <div>
                <Typography variant="h4">{study?.name}</Typography>
            </div>

            <div style={{ margin: '15px 0' }}>
                <Typography variant="h6">
                    <b>Metadata</b>
                </Typography>
            </div>

            {study && <EditMetadata onMetadataEditChange={handleMetadataEditChange} metadata={study.metadata} />}
        </div>
    );
};

export default EditStudyPage;
