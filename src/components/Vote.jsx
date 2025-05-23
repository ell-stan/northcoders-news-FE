import { useState } from "react";
import { patchArticleVotes } from "../api";

function Vote({ article, articleId }) {
  const [userVoteType, setUserVoteType] = useState(null);
  const [voteCount, setVoteCount] = useState(article.votes);
  const [error, setError] = useState(null);

  function updateVote(type) {
    let voteChange = 0;
    let newVoteType = userVoteType;

    if (type === "upvote") {
      if (userVoteType === null) {
        voteChange = 1;
        newVoteType = "upvote";
      } else if (userVoteType === "upvote") {
        voteChange = -1;
        newVoteType = null;
      } else if (userVoteType === "downvote") {
        voteChange = 2;
        newVoteType = "upvote";
      }
    }

    if (type === "downvote") {
      if (userVoteType === null) {
        voteChange = -1;
        newVoteType = "downvote";
      } else if (userVoteType === "upvote") {
        voteChange = -2;
        newVoteType = "downvote";
      } else if (userVoteType === "downvote") {
        voteChange = 1;
        newVoteType = null;
      }
    }

    const previousVoteType = userVoteType;
    const previousVoteCount = voteCount;

    setVoteCount(previousVoteCount + voteChange);
    setUserVoteType(newVoteType);
    setError(null);

    patchArticleVotes(articleId, voteChange).catch(() => {
      setVoteCount(previousVoteCount);
      setUserVoteType(previousVoteType);
      setError("Failed to update vote. Please try again");
    });
  }

  return (
    <>
      <p>{voteCount} votes</p>
      <section className="button-container">
        <button
          onClick={() => updateVote("upvote")}
          className={userVoteType === "upvote" ? "vote-clicked" : "vote-button"}
          aria-label="upvote article"
        >
          +
        </button>
        <button
          onClick={() => updateVote("downvote")}
          className={
            userVoteType === "downvote" ? "vote-clicked" : "vote-button"
          }
          aria-label="downvote article"
        >
          -
        </button>
      </section>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default Vote;
