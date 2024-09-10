import {deleteCategoryById} from "@src/core/usecases";


const makeSut = () => {

  const deleteCategoryByIdRepository = jest.fn();


  const sut = deleteCategoryById({deleteCategoryByIdRepository});
  return {sut, deleteCategoryByIdRepository}
}

describe('DeleteCategoryById usecase', () => {
  it('Should call deleteCategoryByIdRepository with correct id', async () => {
    const categoryId = '4e75da24-4462-4d5d-b489-db47a14d1f8a';
    const {sut, deleteCategoryByIdRepository} = makeSut();
    await sut(categoryId);
    expect(deleteCategoryByIdRepository).toBeCalledTimes(1);
    expect(deleteCategoryByIdRepository).toBeCalledWith(categoryId);
  });

  it('Should throw deleteCategoryByIdRepository throws', async () => {
    const {sut, deleteCategoryByIdRepository} = makeSut();
    deleteCategoryByIdRepository.mockRejectedValue(new Error("Some Error"))
    const promise = sut('4e75da24-4462-4d5d-b489-db47a14d1f8a');
    await expect(promise).rejects.toThrow(new Error("Some Error"));
  });
})