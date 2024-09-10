import {LoadCategoryByIdRepository} from "@src/ports/out";
import {LoadCategoryById} from "@src/ports/in";

type Params = {
  loadCategoryByIdRepository: LoadCategoryByIdRepository
}

type BuildLoadCategoryById = (params: Params) => LoadCategoryById;

export const loadCategoryById: BuildLoadCategoryById = ({loadCategoryByIdRepository}) => async (id) =>
  await loadCategoryByIdRepository(id);

