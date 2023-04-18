import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://be-nc-news-oefr.onrender.com/api",
});

export const getArticles = (topic) => {
  if (topic === "articles") {
    return baseApi.get("/articles").then(({data}) => data.articles)
  } else {
    return baseApi.get(`/articles?topic=${topic}`).then(({ data }) => data.articles);
  }
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

export const modifyVotesInArticle = (article_id, num) => {
  return baseApi
    .patch(
      `/articles/${article_id}`,
      { inc_votes: num },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(({ data }) => data.comment);
};

export const postCommentInArticle = (article_id, bodyText) => {
  return baseApi
    .post(
      `/articles/${article_id}/comments`,
      { username: "tickle122", body: bodyText },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(({ data }) => data.comment);
};

export const getTopics = () => {
  return baseApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
