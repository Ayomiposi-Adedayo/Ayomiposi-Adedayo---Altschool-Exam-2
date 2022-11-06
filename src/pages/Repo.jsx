import { useParams, useNavigate } from "react-router-dom";
import "./Repo.css";

const Repo = ({ repos }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const repo = repos.find((x) => x.id.toString() === id);

  console.log(repos);
  console.log(repo);
  return (
    <>
      {repo ? (
        <div className="repo-card">
          <h2>Below are more information about the repo</h2>
          <p>Name: {repo.name}</p>
          <p>Full-Name: {repo.full_name} </p>
          <p>Repo id: {repo.id}</p>
          <p>Is private?: {repo.private.toString()}</p>
          <p>Repo Description: {repo.description ? repo.description : "-"}</p>
          <p> Owner: {repo.owner.login} </p>
          <p>Repo visibility: {repo.visibility}</p>
          <p>Repo forks: {repo.forks}</p>
          <p>Repo watchers: {repo.watchers}</p>
          <p>Repo open issues: {repo.open_issues}</p>
          <p>Created at : {repo.created_at}</p>
          <button onClick={() => navigate(-1)}>BACK</button>
        </div>
      ) : (
        <p className="error-repo">
          Cannot get repo. <button onClick={() => navigate(-1)}>Back to homepage</button>
        </p>
      )}
    </>
  );
};

export default Repo;
