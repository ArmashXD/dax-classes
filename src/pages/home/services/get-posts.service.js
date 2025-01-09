import axiosInstance from "../../config/axios";

const getPosts = async () => {
  const response = await axiosInstance.get("/posts");
  return response?.data;
};

export default getPosts;
