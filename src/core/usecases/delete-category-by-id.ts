import {DeleteCategoryById} from "@src/ports/in";
import {DeleteCategoryByIdRepository} from "@src/ports/out";

type Params = {
  deleteCategoryByIdRepository: DeleteCategoryByIdRepository
}

type BuildDeleteCategoryById = (params: Params) => DeleteCategoryById;

export const deleteCategoryById: BuildDeleteCategoryById = ({deleteCategoryByIdRepository}) => async (id) => {
  await deleteCategoryByIdRepository(id);
}