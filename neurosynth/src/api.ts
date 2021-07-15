import { Configuration, StudiesApiFactory } from "./gen/api";

const studiesConfiguration: Configuration = new Configuration({ basePath: "https://neurostore.org/api" })

const StudiesService = StudiesApiFactory(studiesConfiguration, undefined, undefined);
export { StudiesService }