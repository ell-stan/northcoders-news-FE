import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://backend-seeding-project.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNewsApi.get(`/articles`).then((res) => {
    const { articles } = res.data;
    return articles;
  });
};

export const getArticleById = (articleId) => {
  return ncNewsApi.get(`/articles/${articleId}`).then((res) => {
    const { article } = res.data;
    return article;
  });
};
