import { Routes, Route } from "react-router";
import Home from "./Home";

function AppRoutes({ articles }) {
  return (
    <Routes>
      <Route path="/" element={<Home articles={articles} />} />
    </Routes>
  );
}

export default AppRoutes;
