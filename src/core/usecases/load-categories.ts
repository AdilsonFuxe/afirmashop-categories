import {LoadCategoriesRepository} from "@src/ports/out";
import {LoadCategories} from "@src/ports/in";

type Params = {
  loadCategoriesRepository: LoadCategoriesRepository
}

type BuildLoadCategories = (params: Params) => LoadCategories

export const loadCategories: BuildLoadCategories = ({loadCategoriesRepository}) => async () =>
  await loadCategoriesRepository();