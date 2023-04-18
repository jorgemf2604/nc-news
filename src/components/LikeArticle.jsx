import { useState } from "react";
import { modifyVotesInArticle } from "../api";

export const LikeArticle = ({ article }) => {
  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false);

  const handleClick = () => {
    setIsVotingErr(false);
    if (userVote === 0) {
      setUserVote(1);
      modifyVotesInArticle(article.article_id, 1).catch(() => {
        setUserVote(0);
        setIsVotingErr(true);
      });
    } else if (userVote === 1) {
      setUserVote(0);
      modifyVotesInArticle(article.article_id, -1).catch(() => {
        setUserVote(1);
        setIsVotingErr(true);
      });
    }
  };

  return (
    <>
      <div className="like-container">
        <button className="like-button" onClick={handleClick}>
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
