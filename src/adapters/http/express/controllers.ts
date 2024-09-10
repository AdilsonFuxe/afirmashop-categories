import {
  makeDbCreateCategory,
  makeDbDeleteCategoryById,
  makeDbLoadCategories,
  makeDbLoadCategoryById, makeDbUpdateCategoryById
} from "@src/adapters/factories/usecases";
import {Request, Response} from "express";

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const {name} = req.body;
    const createCategory = makeDbCreateCategory();
    const result = await createCategory({name});
    // const producer = kafka.producer();
    // await producer.connect();
    // await producer.send({
    //   topic: 'afirma-events',
    //   messages: [
    //     { key: `create-category:${result._id}`, value: JSON.stringify(result) },
    //   ],
    // });
    //
    // await producer.disconnect();
    return res.status(201).json(result);
  }
  catch (e) {
    return  res.status(500).send({error: "Internal server error"});
  }
}

export const loadCategoriesController = async (req: Request, res: Response) => {
 try {
   const loadCategories = makeDbLoadCategories();
   const categories = await loadCategories();
   return res.status(200).json(categories);
 }
 catch (e) {
   return  res.status(500).send({error: "Internal server error"});
 }
}

export const deleteCategoryByIdController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const loadCategoryById = makeDbLoadCategoryById();
    const category = await loadCategoryById(id);
    if (!category) {
      return res.status(404).json({error: 'Category not found'});
    }

    const deleteCategoryById = makeDbDeleteCategoryById();

    await deleteCategoryById(id);
    // const producer = kafka.producer();
    // await producer.connect();
    // await producer.send({
    //     topic: 'afirma-events',
    //     messages: [{key: `delete-category:${id}`, value: JSON.stringify({id})}],
    // });
    //
    // await producer.disconnect();
    return res.status(204).json();
  }
  catch (e) {
    return  res.status(500).send({error: "Internal server error"});
  }
}

export const updateCategoryByIdController = async (req: Request, res: Response) => {
 try {
   const {id} = req.params;
   const loadCategoryById = makeDbLoadCategoryById();
   const category = await loadCategoryById(id);
   if (!category) {
     return res.status(404).json({error: 'Category not found'});
   }
   const {name} = req.body;
   const updateCategoryById = makeDbUpdateCategoryById();
   const result = await updateCategoryById(id, {name});
   // const producer = kafka.producer();
   // await producer.connect();
   // await producer.send({
   //     topic: 'afirma-events',
   //     messages: [{key: `update-category:${id}`, value: JSON.stringify(result)}],
   // });
   //
   // await producer.disconnect();
   return res.status(200).json(result);
 }
 catch (e){
   return  res.status(500).send({error: "Internal server error"});
 }
}
export const loadCategoryByIdController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const loadCategoryById = makeDbLoadCategoryById();
    const category = await loadCategoryById(id);
    if (!category) {
      return res.status(404).json({error: 'Category not found'});
    }
    return res.status(200).json(category);
  }
  catch (e){
    return  res.status(500).send({error: "Internal server error"});
  }
}