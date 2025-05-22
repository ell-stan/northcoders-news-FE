import "../index.css";

function CommentCard({ comment }) {
  return (
    <section className="comment-card">
      <h4>{comment.author}</h4>
      <p>{comment.created_at}</p>
      <p>{comment.votes} votes</p>
      <p>{comment.body}</p>
    </section>
  );
}

export default CommentCard;
