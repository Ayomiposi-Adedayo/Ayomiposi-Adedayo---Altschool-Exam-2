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
          <h2>Repo information</h2>
          <br />
          <p><b>Name:</b> {repo.name}</p>
          <p><b>Full-Name:</b> {repo.full_name} </p>
          <p><b>Repo id:</b> {repo.id}</p>
          <p><b>Is private?:</b> {repo.private.toString()}</p>
          <p><b>Repo Description:</b> {repo.description ? repo.description : "-"}</p>
          <p><b> Owner:</b> {repo.owner.login} </p>
          <p><b>Repo visibility:</b> {repo.visibility}</p>
          <p><b>Repo forks:</b> {repo.forks}</p>
          <p><b>Repo watchers:</b> {repo.watchers}</p>
          <p><b>Repo open issues:</b> {repo.open_issues}</p>
          <p><b>Created at :</b> {repo.created_at}</p>
          <button onClick={() => navigate(-1)}><b>BACK</b></button>
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
