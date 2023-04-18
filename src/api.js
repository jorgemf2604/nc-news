import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://be-nc-news-oefr.onrender.com/api",
});

export const getArticles = () => {
  return baseApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (id) => {
  return baseApi.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsInArticle = (article_id) => {
  return baseApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
