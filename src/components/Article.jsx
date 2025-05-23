import "../index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getArticleAndComments } from "../api";
import CommentCard from "./CommentCard";
import Vote from "./Vote";

function Article() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleAndComments(articleId)
      .then(({ article, comments }) => {
        setArticle(article);
        setComments(comments);
      })
      .catch((err) => {
        console.error("Failed to load article or comments:", err);
      });
  }, [articleId]);

  if (!article) return <p>Loading...</p>;

  return (
    <>
      <section className="article-card">
        <img src={article.article_img_url} alt={`Image for ${article.title}`} />
        <div className="article-text">
          <h3>{article.topic}</h3>
          <h4>{article.author}</h4>
          <h2>{article.title}</h2>
          <div className="article-body-text">
            <p>{article.body}</p>
          </div>
          <p>{article.created_at}</p>
          <Vote articleId={articleId} article={article} />
        </div>
      </section>
      <section className="comment-list">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </section>
    </>
  );
}

export default Article;
