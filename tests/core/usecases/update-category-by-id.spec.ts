import {Status} from "@src/core/domain/types";
import {updateCategoryById} from "@src/core/usecases";

const makeSut = () => {
  const category =
    {
      id: 'any_id',
      name: 'any_name',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: Status.active
    }

  const updateCategoryByIdRepository = jest.fn().mockResolvedValue(category);

  const sut = updateCategoryById({updateCategoryByIdRepository});
  return {sut, updateCategoryByIdRepository, category}
}

describe('UpdateCategoryById usecase', () => {
  it('Should call updateCategoryByIdRepository with correct params', async () => {
    const categoryId = '4e75da24-4462-4d5d-b489-db47a14d1f8a';
    const {sut, updateCategoryByIdRepository} = makeSut();
    await sut(categoryId, {name: 'new_name'});
    expect(updateCategoryByIdRepository).toBeCalledTimes(1);
    expect(updateCategoryByIdRepository).toBeCalledWith(categoryId, {name: 'new_name'});
  });

  it('Should throw updateCategoryByIdRepository throws', async () => {
    const {sut, updateCategoryByIdRepository} = makeSut();
    updateCategoryByIdRepository.mockRejectedValue(new Error("Some Error"))
    const promise = sut('4e75da24-4462-4d5d-b489-db47a14d1f8a', {name: 'new_name'});
    await expect(promise).rejects.toThrow(new Error("Some Error"));
  });

  it('Should return a category on success', async () => {
    const {sut, category} = makeSut();
    const result = await sut('4e75da24-4462-4d5d-b489-db47a14d1f8a', {name: 'new_name'});
    expect(result).toEqual(category);
  })
})