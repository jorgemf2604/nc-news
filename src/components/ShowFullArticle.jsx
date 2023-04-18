import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api.js";
import { LikeArticle } from "./LikeArticle";

export function ShowFullArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [article_id]);

  let myDate = new Date(article.created_at);
  myDate = myDate.toDateString();

  return (
    <div className="fullArticle-container">
      <h2 className="fullArticle-title">{article.title}</h2>
      <div className="date-author">
        <p className="fullArticle-author">{article.author}</p>
        <p>{myDate}</p>
      </div>
      <div className="fullArticle-img-container">
        <p>{article.topic}</p>
        <img src={article.article_img_url} alt={article.title} />
      </div>
      <p className="fullArticle-body">{article.body}</p>
      <LikeArticle article={article} />
    </div>
  );
}
