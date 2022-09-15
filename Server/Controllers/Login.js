import { userModel } from "../Schema/UserSchema.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const body = req.body;
  const user = await userModel.findOne({ userEmail: body.userEmail });
  if (user) {
    const validPassword = await bcrypt.compare(
      body.userPassword,
      user.userPassword
    );
    if (validPassword) {
      res.status(200).send({ message: "Valid password" });
    } else {
      res.status(400).send({ message: "Invalid Password" });
    }
  } else {
    res.status(401).send({ message: "User does not exist" });
  }
};
