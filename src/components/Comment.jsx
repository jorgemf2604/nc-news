export function Comment({ author, body, votes, created_at }) {
  let myDate = new Date(created_at);

  const day = myDate.toLocaleDateString();
  const hour = myDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="comment-container">
      <p className="comment-date">
        {day} - {hour}
      </p>
      <p className="comment-author">{author}</p>
      <p className="comment-body">{body}</p>
      <p className="comment-votes">🗳️ Votes : {votes}</p>
    </div>
  );
}
