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

export const getArticleAndComments = async (articleId) => {
  try {
    const [articleRes, commentsRes] = await Promise.all([
      ncNewsApi.get(`/articles/${articleId}`),
      ncNewsApi.get(`/articles/${articleId}/comments`),
    ]);

    return {
      article: articleRes.data.article,
      comments: commentsRes.data.comments,
    };
  } catch (error) {
    console.error("Error fetching article or comments:", error);
    throw error;
  }
};

export const patchArticleVotes = (articleId, voteValue) => {
  return ncNewsApi.patch(`/articles/${articleId}`, {
    article_id: articleId,
    inc_votes: voteValue,
  });
};

export const postNewComment = (articleId, username, newCommentBody) => {
  return ncNewsApi
    .post(`/articles/${articleId}/comments`, {
      username,
      body: newCommentBody,
    })
    .then((res) => {
      return res.data.comment;
    });
};
