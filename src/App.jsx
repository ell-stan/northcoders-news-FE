import "./App.css";
import { useState, useEffect } from "react";
import { getAllArticles } from "./api.js";
import AppRoutes from "./components/AppRoutes";
import Header from "./components/Header";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const username = "jessjelly";

  useEffect(() => {
    setLoading(true);

    getAllArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AppRoutes articles={articles} username={username} />
      )}
    </section>
  );
}

export default App;
