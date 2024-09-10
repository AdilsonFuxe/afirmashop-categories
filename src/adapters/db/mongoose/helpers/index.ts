import mongoose from "mongoose";

export const MongoHelper = {
  async connect(uri: string): Promise<void> {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri);
  },

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  },

  serialize(data: any): any {
    if (!data) {
      return data;
    }
    const { _id, __v, ...dataWithoutIdAndVersion } = data;



    return { ...dataWithoutIdAndVersion, id: _id };
  },
};
