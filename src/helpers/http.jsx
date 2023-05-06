import axios from "axios";

const http = () => {
  return axios.create({
    baseURL: "http://localhost:4000",
  });
};

export default http;
