import mongoose from "mongoose";
import app from "@src/adapters/http/express/app";


const PORT = process.env.PORT;

export const start = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}