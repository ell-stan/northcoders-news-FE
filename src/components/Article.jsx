import "../index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../api";

function Article() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(articleId)
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        console.error("Error fetching article:", err);
      });
  }, [articleId]);

  if (!article) return <p>Loading...</p>;

  const { article_img_url, title, topic, body, created_at, votes, author } =
    article;

  return (
    <section className="article-card">
      <img src={article_img_url} alt={`Image for ${title}`} />
      <div className="article-text">
        <h2>{title}</h2>
        <p>Topic: {topic}</p>
        <p>Posted by: {author}</p>
        <div className="article-body-text">
          <p>{body}</p>
        </div>
        <p>Date: {created_at}</p>
        <p>Votes: {votes}</p>
      </div>
    </section>
  );
}

export default Article;
