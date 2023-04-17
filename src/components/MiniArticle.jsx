const MiniArticle = ({
  title,
  article_img_url,
  topic,
  author,
  votes,
  comment_count,
}) => {
  return (
    <div className="article-card">
      <div className="card-img-wrapper">
        <img src={article_img_url} alt={title} />
        <p className="card-topic">{topic}</p>
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-author">{author}</p>
      <div className="miniArticle-metrics">
        <p>
          {votes}{" "}
          <span aria-label="number of likes" className="like-icon">
            ❤️
          </span>
        </p>
        <p>
          {comment_count}{" "}
          <span aria-label="number of comments" className="comments-icon">
            ✍🏽
          </span>
        </p>
      </div>
    </div>
  );
};

export default MiniArticle;
