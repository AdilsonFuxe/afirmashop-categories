import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import mockDate from 'mockdate';
jest.spyOn(console, 'error').mockReturnValue(undefined);
let mongo: MongoMemoryServer;
beforeAll(async () => {
  mockDate.set(new Date());
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();
  await mongoose.connect(mongoUri, {});
});

afterAll(async () => {
  mockDate.reset();
  await mongoose.disconnect();
  await mongo.stop();
});
