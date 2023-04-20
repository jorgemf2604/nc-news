import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import MiniArticle from "../components/MiniArticle";
import FilterArticle from "../components/FilterArticle";
import * as api from "../api.js";

const ShowMiniArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [order, setOrder] = useState("desc");
  const [selectedCategory, setSelectedCategory] = useState("created_at");

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");

  const location = useLocation();
  let currentTopic = location.pathname.slice(1);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(
        currentTopic === "articles" ? undefined : currentTopic,
        sortBy,
        orderBy
      )
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [currentTopic, sortBy, orderBy]);

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <h2>Loading articles, please wait</h2>
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <FilterArticle
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          order={order}
          setOrder={setOrder}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <main className="articles-container">
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
      </>
    );
  }
};

export default ShowMiniArticles;
