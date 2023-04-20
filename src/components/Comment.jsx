import { deleteComment } from "../api";
import { useState } from "react";


export function Comment({ author, body, votes, created_at, comment_id, setComments, comments }) {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  

  let myDate = new Date(created_at);

  const day = myDate.toLocaleDateString();
  const hour = myDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
  });

  const handleClick = (e) => {
    setIsBtnDisabled(true);
    deleteComment(e.target.id).then(()=> {
      const filteredComments = comments.filter(comment => comment.comment_id !== Number(comment_id))
      setComments(filteredComments)
      setIsBtnDisabled(false)

    })
    .catch(() => {
      setIsBtnDisabled(false)
      setIsError(true)
    })
  }


  return (
    <div className="comment-container">
      <p className="comment-date">
        {day} - {hour}
      </p>
      <p className="comment-author">{author}</p>
      <p className="comment-body">{body}</p>
      <div className="comment-inner-wrapper">
        <p className="comment-votes">🗳️ Votes : {votes}</p>
        {author === "tickle122"? <button disabled={isBtnDisabled} onClick={handleClick} className="remove-comment" id={comment_id}>🗑️ Remove</button> : null } 
      </div>
      {isError? <p>Something went wrong when trying to delete the comment, try again</p>: null}
    </div>
  );
}
