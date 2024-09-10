import {Status} from "@src/core/domain/types";
import {loadCategoryById} from "@src/core/usecases";


const makeSut = () => {
  const category =
    {
      id: 'any_id',
      name: 'any_name',
      createdAt: new Date(),
      updatedAt: new Date(),
      status: Status.active
    }

  const loadCategoryByIdRepository = jest.fn().mockResolvedValue(category);


  const sut = loadCategoryById({loadCategoryByIdRepository});
  return {sut, loadCategoryByIdRepository, category}
}

describe('LoadCategoryById usecase', () => {
  it('Should call loadCategoryByIdRepository with correct id', async () => {
    const categoryId = '4e75da24-4462-4d5d-b489-db47a14d1f8a';
    const {sut, loadCategoryByIdRepository} = makeSut();
    await sut(categoryId);
    expect(loadCategoryByIdRepository).toBeCalledTimes(1);
    expect(loadCategoryByIdRepository).toBeCalledWith(categoryId);
  });

  it('Should throw loadCategoryByIdRepository throws', async () => {
    const {sut, loadCategoryByIdRepository} = makeSut();
    loadCategoryByIdRepository.mockRejectedValue(new Error("Some Error"))
    const promise = sut('4e75da24-4462-4d5d-b489-db47a14d1f8a');
    await expect(promise).rejects.toThrow(new Error("Some Error"));
  });

  it('Should return a category on success', async () => {
    const {sut, category} = makeSut();
    const result = await sut('4e75da24-4462-4d5d-b489-db47a14d1f8a');
    expect(result).toEqual(category);
  })
})