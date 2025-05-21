import { useState } from "react";
import ArticleList from "./ArticleList";
import "../index.css";

function Home({ articles }) {
  const [showAll, setShowAll] = useState(false);
  const limit = 5;

  const displayedArticles = showAll ? articles : articles.slice(0, limit);
  const heading = showAll ? "All articles" : "Here are the newest articles:";

  const ToggleButton = () => {
    if (articles.length <= limit) return null;

    return showAll ? (
      <button onClick={() => setShowAll(false)}>Show Less Articles</button>
    ) : (
      <button onClick={() => setShowAll(true)}>View All Articles</button>
    );
  };

  return (
    <section>
      <h2>{heading}</h2>
      <ToggleButton />
      <ArticleList articles={displayedArticles} />
      <ToggleButton />
    </section>
  );
}

export default Home;
