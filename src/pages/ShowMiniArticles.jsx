import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import MiniArticle from "../components/MiniArticle";
import * as api from "../api.js";

const ShowMiniArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadingMsg = isLoading ? (
    <div className="loading-spinner">
      <h2>Loading articles, please wait</h2>
      <Spinner />
    </div>
  ) : null;

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="articles-container">
      {loadingMsg}
      {articles.map((article) => (
        <MiniArticle key={article.article_id} {...article} />
      ))}
    </main>
  );
};

export default ShowMiniArticles;
