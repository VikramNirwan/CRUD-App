import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-crqs756-shard-00-00.wznxyh1.mongodb.net:27017,ac-crqs756-shard-00-01.wznxyh1.mongodb.net:27017,ac-crqs756-shard-00-02.wznxyh1.mongodb.net:27017/CRUD-APP?ssl=true&replicaSet=atlas-2qtukm-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(
      URL,
      { useUnifiedTopology: true },
      { useNewUrlParser: true }
    );
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log(`Error while connecting database`, error);
  }
};

export default Connection;
