// dependency imports
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect, useState } from "react";
// my imports
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import { ThemeContext } from "./context/ThemeContext";
import { FullArticle } from "./pages/FullArticle";
import { getTopics } from "./api";
import ShowMiniArticles from "./pages/ShowMiniArticles";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
    .then(topics => setTopics(topics))
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="app" id={`app-${theme}`}>
      <Header topics={topics}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ShowMiniArticles />} />
        {topics.map(topic => <Route key={topic} path={`/${topic.slug}`} element={<ShowMiniArticles />}/>)}
        <Route path="/articles/:article_id" element={<FullArticle />} />
      </Routes>
      <Footer theme={theme} setTheme={setTheme} />
      <ToastContainer position="top-center"/>
    </div>
  );
}

export default App;
