import { postCommentInArticle } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function AddComment({ setComments }) {
  const [inputValue, setInputValue] = useState("");
  const [isErrorPostingComment, setIsErrorPostingComment] = useState(false);
  const { article_id } = useParams();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setIsBtnDisabled(true);
      setInputValue("");
      postCommentInArticle(article_id, inputValue)
        .then((addedComment) => {
          setComments((currentComments) => [addedComment, ...currentComments]);
          setIsBtnDisabled(false);
        })
        .catch((err) => {
          setIsErrorPostingComment(true);
          setIsBtnDisabled(false);
        });
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="add-comment-input">Enter your comment: </label>
        <textarea
          id="add-comment-input"
          required
          placeholder="Write comment..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        <button className="add-comment-btn" disabled={isBtnDisabled}>
          Add Comment
        </button>
        {isErrorPostingComment && (
          <p className="error-comment-posting">
            Error: Unable to post the comment
          </p>
        )}
      </form>
    </div>
  );
}
