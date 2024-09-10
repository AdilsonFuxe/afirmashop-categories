import {UpdateCategoryByIdRepository} from "@src/ports/out";
import {UpdateCategoryById} from "@src/ports/in";

type Params = {
  updateCategoryByIdRepository: UpdateCategoryByIdRepository
}

type BuildUpdateCategoryById = (params: Params) => UpdateCategoryById;

export const updateCategoryById: BuildUpdateCategoryById = ({updateCategoryByIdRepository}) => async (id, params) =>
  await updateCategoryByIdRepository(id, params);