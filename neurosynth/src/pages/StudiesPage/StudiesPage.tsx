import { useEffect, useState } from 'react';
import { StudiesService } from '../../api';
import { Study } from '../../gen/api';

const StudiesPage = () => {
    const [studies, setStudies] = useState<Study[]>();

    useEffect(() => {
        StudiesService.studiesGet().then((res) => {
            console.log('called');

            setStudies(res.data);
        });
    }, []);

    return (
        <>
            <div>Studies page</div>

            {studies?.map((study, i) => (
                <p key={i}>{study.name}</p>
            ))}
        </>
    );
};
export default StudiesPage;
