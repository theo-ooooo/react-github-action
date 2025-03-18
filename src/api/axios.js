import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "672c938b7ab885955f41457b5c5f6b76",
    language: "ko-KR",
  },
});

export default instance;
