import productModel from '../models/product-model.js';

export const createProductRepository = async ({
  _id,
  name,
  categoryId,
  price,
}) => {
  const product = new productModel({ _id, name, categoryId, price });
  await product.save();
  return product;
};
