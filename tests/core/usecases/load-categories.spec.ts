import {Category} from "@src/core/domain/models";
import {Status} from "@src/core/domain/types";
import {loadCategories} from "@src/core/usecases";


const makeSut = () => {
  const categories: ReadonlyArray<Category> = [
    {
      id: 'any_id',
      name: 'any_name',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: Status.active
    }
  ]
  const loadCategoriesRepository = jest.fn().mockResolvedValue(categories);
  const sut = loadCategories({loadCategoriesRepository});
  return {sut, loadCategoriesRepository, categories}
}

describe('LoadCategories usecase', () => {
  it('Should call loadCategoriesRepository with correct params', async () => {
    const {sut, loadCategoriesRepository} = makeSut();
    await sut();
    expect(loadCategoriesRepository).toBeCalledTimes(1);
  });

  it('Should throw loadCategoriesRepository throws with correct params', async () => {
    const {sut, loadCategoriesRepository} = makeSut();
    loadCategoriesRepository.mockRejectedValue(new Error("Some Error"))
    const promise = sut();
    await expect(promise).rejects.toThrow(new Error("Some Error"));
  });

  it('Should return a list of categories on success', async () => {
    const {sut, categories} = makeSut();
    const result = await sut();
    expect(result).toEqual(categories);
  })
})