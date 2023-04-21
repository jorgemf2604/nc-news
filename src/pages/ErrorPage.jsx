import { NavLink } from "react-router-dom";
import ilustration from "../assets/images/error.svg";

const ErrorPage = ({message}) => {
  return (
    <div className="notFound">
      <div className="notFound-left">
        <h2>{message}</h2>
        <div className="alice">
          <p>
            <span className="highlight-1">Alice: </span>Would you tell me,
            please, which way I ought to go from here?
          </p>
          <p>
            <span className="highlight-2">The Cheshire Cat: </span>That depends
            a good deal on where you want to get to.
          </p>
          <p>
            <span className="highlight-1">Alice: </span>I don't much care where.
          </p>
          <p>
            <span className="highlight-2">The Cheshire Cat: </span>Then it
            doesn't much matter which way you go.
          </p>
          <p>
            <span className="highlight-1">Alice: </span> ...So long as I get
            somewhere.
          </p>
          <p>
            <span className="highlight-2">The Cheshire Cat: </span>Oh, you're
            sure to do that, if only you walk long enough.
          </p>
          <p>Lewis Carroll, Alice in Wonderland</p>
        </div>
        <p className="link-back">
          Go back to the <NavLink to="/">Homepage</NavLink>
        </p>
      </div>

      <div className="notFound-right">
        <img src={ilustration} alt="a 404 error" />
      </div>
    </div>
  ); 
}
 
export default ErrorPage;

