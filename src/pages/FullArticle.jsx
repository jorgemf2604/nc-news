import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShowFullArticle } from "../components/ShowFullArticle";
import { ShowComments } from "../components/ShowComments";
import { getCommentsInArticle } from "../api";
import { AddComment } from "../components/AddComment";
import ErrorPage from "../pages/ErrorPage.jsx";
import image from "../assets/images/prince3.png";

export function FullArticle() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    getCommentsInArticle(article_id)
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [article_id]);


  if (error) {
    return <ErrorPage message={error} />
  }

  return (
    <div className="fullArticle-app">
      <div className="left-side">
        <ShowFullArticle setError={setError}/>
        <div className="left-side-img-container">
          <img src={image} alt="the litle prince and fox sittin on a planet" />
        </div>
      </div>
      <div className="right-side">
        <AddComment setComments={setComments} />
        <ShowComments comments={comments} setComments={setComments} />
      </div>
    </div>
  );
}
