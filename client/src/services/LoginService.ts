import { fetchData } from "../helpers/methods";

export const loginUser = async (body: { email: string; password: string }) => {
  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await fetchData(
      "http://localhost:8080/api/auth/login",
      "POST",
      headers,
      body
    );
    return response;
  } catch (e: any) {
    console.log(e);
  }
};
