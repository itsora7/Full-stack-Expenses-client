import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api/v1/";
// ======= User Api
export const postUser = async (obj) => {
  try {
    const { data } = axios.post(baseUrl, obj);
    // console.log(resp);
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};
// ======= Transaction Api
