import {Category} from "@src/core/domain/models";

export type LoadCategories = () => Promise<ReadonlyArray<Category>>;
export type LoadCategoryById = (id: string) => Promise<Category>;
export type DeleteCategoryById = (id: string) => Promise<void>;

export namespace UpdateCategoryById {
  export type Params = { name: string };
  export type Response = Category
}

export type UpdateCategoryById = (id: string, params: UpdateCategoryById.Params) => Promise<UpdateCategoryById.Response>

export namespace CreateCategory {
  export type Params = { name: string };
  export type Response = Category
}

export type CreateCategory = (params: CreateCategory.Params) => Promise<CreateCategory.Response>;