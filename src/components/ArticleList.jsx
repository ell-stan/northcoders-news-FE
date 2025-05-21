import ArticleCard from "./ArticleCard";
import "../index.css";

function ArticleList({ articles }) {
  if (!articles || articles.length === 0) {
    return <p>No articles to display.</p>;
  }
  return (
    <section className="article-list">
      {articles.map((article) => {
        return (
          <ArticleCard
            key={`${article.title}${article.created_at}`}
            article={article}
          />
        );
      })}
    </section>
  );
}

export default ArticleList;
