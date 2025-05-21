import "../index.css";
import { Link } from "react-router";

function ArticleCard({ article }) {
  const {
    title,
    topic,
    author,
    created_at,
    votes,
    comment_count,
    article_img_url,
    article_id,
  } = article;
  return (
    <section className="article-card">
      <img src={article_img_url} alt={`Image for article titled ${title}`} />
      <div className="article-text">
        <Link
          to={`/articles/${article_id}`}
          aria-label="to read the body of this article, click the title heading"
        >
          <h3 aria-label="title heading">{title}</h3>
        </Link>
        <p>Topic: {topic}</p>
        <p>Posted by: {author}</p>
        <p>Date: {created_at}</p>
        <p>Votes: {votes}</p>
        <p>Comments: {comment_count}</p>
      </div>
    </section>
  );
}

export default ArticleCard;
