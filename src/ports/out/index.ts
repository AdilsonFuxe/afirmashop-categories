import {Category} from "@src/core/domain/models";
import {CreateCategory, UpdateCategoryById} from "@src/ports/in";
import {Topics} from "@src/core/domain/types";

export type LoadCategoriesRepository = () => Promise<ReadonlyArray<Category>>;
export type LoadCategoryByIdRepository = (id: string) => Promise<Category>;
export type DeleteCategoryByIdRepository = (id: string) => Promise<void>;
export type UpdateCategoryByIdRepository = (id: string, params: UpdateCategoryById.Params) => Promise<UpdateCategoryById.Response>
export type CreateCategoryRepository = (params: CreateCategory.Params) => Promise<CreateCategory.Response>


export type SendEvent = (topic: Topics, data: string) => Promise<void>;
