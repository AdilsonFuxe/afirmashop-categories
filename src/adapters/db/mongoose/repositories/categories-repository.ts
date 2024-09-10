import {
  CreateCategoryRepository,
  DeleteCategoryByIdRepository,
  LoadCategoriesRepository,
  LoadCategoryByIdRepository, UpdateCategoryByIdRepository
} from "@src/ports/out";
import {MongoHelper} from "@src/adapters/db/mongoose/helpers";
import CategoryModel from "@src/adapters/db/mongoose/models/category-model";
import {Status} from "@src/core/domain/types";

export const createCategoryRepository:CreateCategoryRepository = async (params) => {
  const doc = new CategoryModel(params);
  await doc.save();
  const parsedDoc = JSON.parse(JSON.stringify(doc));
  return MongoHelper.serialize(parsedDoc);
};

export const loadCategoriesRepository: LoadCategoriesRepository = async () => {
  const result = await CategoryModel.find({ status: Status.active }).lean();
  return result.map(MongoHelper.serialize)
};

export const loadCategoryByIdRepository: LoadCategoryByIdRepository = async (id) => {
  const result =  await CategoryModel.findOne({ _id: id, status: Status.active }).lean();
  return MongoHelper.serialize(result);
};

export const deleteCategoryByIdRepository: DeleteCategoryByIdRepository = async (id) => {
  await CategoryModel.findByIdAndUpdate(id, { status: Status.deleted });
};

export const updateCategoryByIdRepository: UpdateCategoryByIdRepository = async (id, { name }) => {
  const result =  await CategoryModel.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  ).lean();
  return MongoHelper.serialize(result);
};
