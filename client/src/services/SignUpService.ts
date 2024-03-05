import { fetchData } from "../helpers/methods";

export const signUpService = async (body: {
  userName: string;
  password: string;
  email: string;
}) => {
  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await fetchData(
      "http://localhost:8080/api/auth/signup",
      "POST",
      headers,
      body
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const checkUserName = async (userName: string) => {
  try {
    const response = await fetchData(
      `http://localhost:8080/api/auth/checkUsername/${userName}`,
      "GET"
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
