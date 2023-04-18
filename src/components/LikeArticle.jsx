import { useState } from "react";
import { modifyVotesInArticle } from "../api";

export const LikeArticle = ({ article }) => {
  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false);

  const handleClick = () => {
    setIsVotingErr(false);
    setUserVote(1);
    modifyVotesInArticle(article.article_id, 1).catch(() => {
      setUserVote(0);
      setIsVotingErr(true);
    });
  };

  return (
    <>
      <div className="like-container">
        <button
          className="like-button"
          onClick={handleClick}
          disabled={userVote !== 0}
        >
          <span className="likes-counter">{`Vote ❤️ `}</span>
        </button>
        <p className="article-votes">Votes: {article.votes + userVote}</p>
      </div>
      <p className="update-like-error">
        {isVotingErr && "Unable to modify votes"}
      </p>
    </>
  );
};
