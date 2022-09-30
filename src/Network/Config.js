import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?",
  params: {
    // popular:"popular?",
    api_key: "4d2eadaa21670e503224c652f4256101",
  },
});

export default axiosInstance;
