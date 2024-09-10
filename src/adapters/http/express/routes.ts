import {Application, Router} from 'express';
import {
  createCategoryController,
  deleteCategoryByIdController,
  loadCategoriesController,
  loadCategoryByIdController,
  updateCategoryByIdController
} from "./controllers";
import {auth} from "@src/adapters/http/express/auth-middleware";
import {Roles} from "@src/core/domain/types";


export default (app: Application) => {
  const router = Router();

  router.post('/categories', auth([Roles.Admin]), createCategoryController);

  router.get('/categories', loadCategoriesController);

  router.delete('/categories/:id', auth([Roles.Admin]), deleteCategoryByIdController);

  router.put('/categories/:id', auth([Roles.Admin]), updateCategoryByIdController);

  router.get('/categories/:id', loadCategoryByIdController);

  app.use('/api/v1', router);
}