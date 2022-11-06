import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

import "./Home.css";

const Home = ({ allRepos }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  const pages = [];
  for (let i = 1; i < Math.ceil(repos.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = repos.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    return (
      // eslint-disable-next-line eqeqeq
      <li key={number} id={number} onClick={handleClick} className={currentPage == number ? "active" : null}>
        {number}
      </li>
    );
  });
  const navigate = useNavigate();
  useEffect(() => {
    const getRepos = async () => {
      const res = await fetch("https://api.github.com/users/Ayomiposi-Adedayo/repos");
      const data = await res.json();

      if (res.ok) {
        setLoading(false);
        setRepos(data);

        // passing repos to parent.
        allRepos(data);
      }
    };
    getRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading ? (
        <Loading type="bubbles" color="gray" />
      ) : (
        <div className="all-repos">
         
          {currentItems.map((repo) => {
            return (
           <div
                key={repo.id}
                className="repo"
                onClick={() => {
                  navigate(`/repos/${repo.id}`);
                }}
              >
               
                  <p className="repo-name">{repo.name}</p>
                  <p className="repo-full-name">{repo.full_name}</p>
                
              </div>
            );
          })}
          <ul className="page-numbers">{renderPageNumbers}</ul>
        </div>
      )}
    </>
  );
};

export default Home;
