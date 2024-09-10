import {
  createCategory,
  deleteCategoryById,
  loadCategories,
  loadCategoryById,
  updateCategoryById
} from "@src/core/usecases";
import {
  createCategoryRepository,
  deleteCategoryByIdRepository,
  loadCategoriesRepository,
  loadCategoryByIdRepository,
  updateCategoryByIdRepository
} from "@src/adapters/db/mongoose/repositories/categories-repository";
import {sendEventDecorator} from "@src/adapters/decorators/send-event-decorator";
import {kafkaSendEventAdapter} from "@src/adapters/message-queue/kafka/kafka-send-event-adapter";
import {Topics} from "@src/core/domain/types";
import {loadAccountByToken, jwtDecryptAdapter} from "@afirmashop/common-logic";
import {loadAccountByTokenRepository} from "@src/adapters/db/mongoose/repositories/account-repository";

export const makeDbCreateCategory = () => sendEventDecorator(createCategory({createCategoryRepository}), (__, res) => {
  kafkaSendEventAdapter(Topics.CreateCategory, JSON.stringify(res));
  return res;
});
export const makeDbLoadCategories = () => loadCategories({loadCategoriesRepository});
export const makeDbLoadCategoryById = () => loadCategoryById({loadCategoryByIdRepository});
export const makeDbDeleteCategoryById = () => sendEventDecorator(deleteCategoryById({deleteCategoryByIdRepository}), (req, res) => {
  kafkaSendEventAdapter(Topics.DeleteCategory, JSON.stringify({id: req[0]}))
  return res;
})
export const makeDbUpdateCategoryById = () => sendEventDecorator(updateCategoryById({updateCategoryByIdRepository}), (__, res) => {
  kafkaSendEventAdapter(Topics.UpdateCategory, JSON.stringify(res));
  return res;
});
export const makeDbLoadAccountByToken = () => loadAccountByToken({
  decrypt: jwtDecryptAdapter(process.env.JWT_SECRET),
  loadAccountByTokenRepository
});