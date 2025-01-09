import axiosInstance from "../../../config/axios";

const createPost = async (payload) => {
  const response = await axiosInstance.post("/posts", payload);
  return response?.data;
};

export default createPost;
