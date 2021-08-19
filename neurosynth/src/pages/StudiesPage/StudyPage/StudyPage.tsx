import { useAuth0 } from '@auth0/auth0-react';
import { Button, Tooltip, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import API, { StudyApiResponse } from '../../../utils/api';
import StudyPageStyles from './StudyPageStyles';
import EditMetadata from './EditMetadata/EditMetadata';

const StudyPage = () => {
    const [study, setStudy] = useState<StudyApiResponse>();
    const classes = StudyPageStyles();
    const { isAuthenticated } = useAuth0();
    const params: { studyId: string } = useParams();

    const getStudy = (id: string) => {
        API.Services.StudiesService.studiesIdGet(id)
            .then((res) => {
                setStudy(res.data);
            })
            .catch(() => {});
    };

    const cloneStudy = () => {
        API.Services.StudiesService.studiesPost();
    };

    useEffect(() => {
        if (params.studyId) {
            getStudy(params.studyId);
        }
    }, []);

    return (
        <div>
            <div className={classes.buttonContainer}>
                <Tooltip
                    placement="top"
                    title={!isAuthenticated ? 'login to clone study' : ''}
                >
                    <div style={{ display: 'inline' }}>
                        <Button
                            disabled={!isAuthenticated}
                            variant="outlined"
                            color="primary"
                        >
                            Clone Study
                        </Button>
                    </div>
                </Tooltip>
            </div>
            <div>
                <Typography variant="h5">{study?.name}</Typography>
            </div>
            <br />
            <div>{(study?.metadata as any)?.authors}</div>
            <br />
            <div className={classes.muted}>
                {(study?.metadata as any)?.description}
            </div>

            <div>
                <div style={{ margin: '30px 0' }}>
                    <Typography variant="h6">Edit Metadata</Typography>
                </div>
                <div className={classes.metadataContainer}>
                    {study?.metadata &&
                        Object.keys(study?.metadata as any).map(
                            (key, index) => (
                                <EditMetadata
                                    key={index}
                                    editKey={key}
                                    editValue={(study.metadata as any)[key]}
                                    valueType="string"
                                />
                            ),
                        )}
                </div>
            </div>
        </div>
    );
};

export default StudyPage;
