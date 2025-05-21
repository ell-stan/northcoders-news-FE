import "../index.css";

function ArticleCard({ article }) {
  const {
    title,
    topic,
    author,
    created_at,
    votes,
    comment_count,
    article_img_url,
  } = article;
  return (
    <section className="article-card">
      <img src={article_img_url} alt={`Image for article titled ${title}`} />
      <div className="article-text">
        <h3>{title}</h3>
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
