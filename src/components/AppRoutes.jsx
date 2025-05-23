import { Routes, Route } from "react-router";
import Home from "./Home";
import Article from "./Article";
import CommentForm from "./CommentForm";

function AppRoutes({ articles, username }) {
  return (
    <Routes>
      <Route path="/" element={<Home articles={articles} />} />
      <Route path="/articles/:articleId/*" element={<Article />} />
      <Route
        path="/articles/:articleId/newComment"
        element={<CommentForm username={username} />}
      />
    </Routes>
  );
}

export default AppRoutes;
