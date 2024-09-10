import {CreateCategoryRepository} from "@src/ports/out";
import {CreateCategory} from "@src/ports/in";

type Params = {
  createCategoryRepository: CreateCategoryRepository
}

type BuildUpdateCategoryById = (params: Params) => CreateCategory;

export const createCategory: BuildUpdateCategoryById = ({createCategoryRepository}) => async (params) =>
  await createCategoryRepository(params);