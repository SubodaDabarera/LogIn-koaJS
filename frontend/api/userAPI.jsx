import axios from "axios";

export const createUser = async (data) => {
  try {
    await axios
      .post("http://localhost:3000/users/new", data)
      .then(() => console.log("User created"));
  } catch (err) {
    console.error(err);
  }
};

export const userLogIn = async (data, setIsSuccess) => {
  try {
    await axios
      .post("http://localhost:3000/users/logIn", data)
      .then((result) => {
        localStorage.setItem("isSuccess" , result.data[0]);
        localStorage.setItem("user", JSON.stringify(result.data[1]));
      });
  } catch (err) {
    console.error(err);
  }
};
