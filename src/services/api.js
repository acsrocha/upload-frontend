import axios from "axios";

const api = axios.create({
  baseURL: "https://acsr-upload-backend.herokuapp.com"
});

export default api;