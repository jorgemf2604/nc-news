import { NavLink } from "react-router-dom";
import image from "../assets/images/prince2.png";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h2>
          Where everything is <span className="home-accent">happening</span>
        </h2>
        <div className="home-quote">
          <p>
            “People have forgotten this truth," the fox said. "But you mustn’t
            forget it. You become responsible forever for what you’ve tamed.
            You’re responsible for your rose.”
          </p>
          <p>
            <span className="cursive">
              ― Antoine de Saint-Exupéry, The Little Prince
            </span>
          </p>
        </div>
        <NavLink to="/articles">See articles</NavLink>
      </div>
      <div className="home-right">
        <img
          src={image}
          alt="the little prince and the fox sittins on their planet"
        />
      </div>
    </div>
  );
};

export default HomePage;
