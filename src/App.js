import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Repo from "./pages/Repo";
import Error from "./pages/Error";

function App() {
  const [repos, setRepos] = useState([]);

  const allRepos = (repos) => {
    console.log(repos);
    setRepos(repos);
  };
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home allRepos={allRepos} />} />
          <Route path="repos/:id" element={<Repo repos={repos} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
