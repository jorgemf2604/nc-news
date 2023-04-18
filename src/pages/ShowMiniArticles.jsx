import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import MiniArticle from "../components/MiniArticle";
import * as api from "../api.js";

const ShowMiniArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation()
  const currentTopic = location.pathname.slice(1);

  const loadingMsg = isLoading ? (
    <div className="loading-spinner">
      <h2>Loading articles, please wait</h2>
      <Spinner />
    </div>
  ) : null;

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(currentTopic)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
      });
    
  }, [currentTopic]);

  return (
    <main className="articles-container">
      <div className="spinner-container">
        {loadingMsg}
      </div>
      {articles.map((article) => (
        <Link
          className="article-link"
          to={`/articles/${article.article_id}`}
          key={article.article_id}
        >
          <MiniArticle {...article} />
        </Link>
      ))}
    </main>
  );
};

export default ShowMiniArticles;
