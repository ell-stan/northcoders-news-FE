import { useState } from "react";
import { postNewComment } from "../api";
import { useParams } from "react-router";

function CommentForm({ username }) {
  const { articleId } = useParams();
  const [newCommentBody, setNewCommentBody] = useState("");
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("Error state:", error);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setSuccessMessage(null);

    postNewComment(articleId, username, newCommentBody)
      .then((comment) => {
        setSuccessMessage(
          `Success! Here's your posted comment: ${comment.body}`
        );
        setNewCommentBody("");
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Comment</label>
      <input
        type="text"
        required
        value={newCommentBody}
        onChange={(event) => setNewCommentBody(event.target.value)}
        disabled={loading}
      ></input>
      <button disabled={loading}>{loading ? "Posting..." : "Submit"}</button>
      {error && (
        <p className="error-message">Something went wrong. Please try again</p>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
}

export default CommentForm;
