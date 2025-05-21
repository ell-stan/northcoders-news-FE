import { Routes, Route } from "react-router";
import Home from "./Home";
import Article from "./Article";

function AppRoutes({ articles }) {
  return (
    <Routes>
      <Route path="/" element={<Home articles={articles} />} />
      <Route path="/articles/:articleId/*" element={<Article />} />
    </Routes>
  );
}

export default AppRoutes;
