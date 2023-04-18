import { Comment } from "./Comment.jsx";

export function ShowComments({ comments }) {
  const commentsEl = comments.map((comment) => {
    return <Comment key={comment.comment_id} {...comment} />;
  });

  return (
    <>
      {comments.length !== 0 ? (
        <div className="comments-container">
          <h2>Comments ({comments.length}) : </h2>
          <div className="comments">{commentsEl}</div>
        </div>
      ) : (
        <h2 className="no-comments-msg">
          Sorry, there are no comments for this article
        </h2>
      )}
    </>
  );
}
