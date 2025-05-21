import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://backend-seeding-project.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNewsApi.get(`/articles?sort_by=created_at`).then((res) => {
    const { articles } = res.data;
    return articles;
  });
};

// export const getAllArticles = () => {
//   return ncNewsApi.get(`/articles?sort_by=created_at`).then((res) => {
//     return res.data.articles;
//   });
// };
