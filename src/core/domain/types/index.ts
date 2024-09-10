export enum Status {
  active = 'active',
  deleted = 'deleted',
}

export enum Topics  {
  CreateCategory = 'create-category',
  DeleteCategory = 'delete-category',
  UpdateCategory = 'update-category'
}

export enum Roles  {
  Customer = 'Customer',
  Admin = 'Admin'
}

export type Session = {
  accessToken: string;
  createdAt: Date;
  updatedAt: Date;
};
