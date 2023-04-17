import Navigation from "../components/Navigation";

const Header = () => {
  // we are hard-coding the user
  const loggedUser = {
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  };

  return (
    <header className="header">
      <div className="logo-avatar-wrapper">
        <div className="avatar-container">
          <img
            className="user-avatar"
            src={loggedUser.avatar_url}
            alt={`avatar of ${loggedUser.name}`}
          />
          <p>{loggedUser.username}</p>
        </div>
        <h1>Northcoders News</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
