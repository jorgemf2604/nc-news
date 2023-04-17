import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://be-nc-news-oefr.onrender.com/api",
});

export const getArticles = () => {
  return baseApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
