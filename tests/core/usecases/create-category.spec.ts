import {Status} from "@src/core/domain/types";
import {createCategory} from "@src/core/usecases";

const makeSut = () => {
  const category =
    {
      id: 'any_id',
      name: 'any_name',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: Status.active
    }

  const createCategoryRepository = jest.fn().mockResolvedValue(category);



  const sut = createCategory({createCategoryRepository});
  return {sut, createCategoryRepository, category}
}

describe('CreateCategory usecase', () => {
  it('Should call createCategoryRepository with correct params', async () => {

    const {sut, createCategoryRepository} = makeSut();
    await sut({name: 'new_name'});
    expect(createCategoryRepository).toBeCalledTimes(1);
    expect(createCategoryRepository).toBeCalledWith({name: 'new_name'});
  });

  it('Should throw createCategoryRepository throws', async () => {
    const {sut, createCategoryRepository} = makeSut();
    createCategoryRepository.mockRejectedValue(new Error("Some Error"))
    const promise = sut({name: 'new_name'});
    await expect(promise).rejects.toThrow(new Error("Some Error"));
  });

  it('Should return a category on success', async () => {
    const {sut, category} = makeSut();
    const result = await sut({name: 'new_name'});
    expect(result).toEqual(category);
  })
})