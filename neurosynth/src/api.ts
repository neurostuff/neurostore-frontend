import {
    AnalysesApiFactory,
    ConditionsApiFactory,
    Configuration,
    DatasetsApiFactory,
    ImagesApiFactory,
    PointsApiFactory,
    StudiesApiFactory,
    UserApiFactory,
} from './gen/api';

const config: Configuration = new Configuration({
    basePath: 'https://neurostore.org/api',
});

const StudiesService = StudiesApiFactory(config, undefined, undefined);
const AnalysesService = AnalysesApiFactory(config, undefined, undefined);
const ConditionsService = ConditionsApiFactory(config, undefined, undefined);
const DataSetsService = DatasetsApiFactory(config, undefined, undefined);
const ImagesService = ImagesApiFactory(config, undefined, undefined);
const PointsService = PointsApiFactory(config, undefined, undefined);
const UsersService = UserApiFactory(config, undefined, undefined);

export {
    StudiesService,
    AnalysesService,
    ConditionsService,
    DataSetsService,
    ImagesService,
    PointsService,
    UsersService,
};
