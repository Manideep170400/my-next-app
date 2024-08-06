import mongoose from "mongoose";
import { Schema } from "mongoose";

const loginSchmea = new Schema({
  login: {
    name: String,
    email: String,
    password: String,
  },
});
const createSchema = new Schema({
  createAcount: {
    email: String,
    password: String,
    createPassowrd: String,
  },
});

function MainPage() {
  const loginPage = mongoose.model("loginSchema", loginSchmea);
  const createpage = mongoose.model("createSchema", createSchema);
  return {
    loginPage,
    createpage,
  };
}

export default MainPage;
