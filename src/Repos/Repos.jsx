import { useState } from "react";
import "./Repos.css";
import useDataSore from "../Store/Store";
const Repos = () => {
  const [repositories, setRepositories] = useState(null);

  
  const username = useDataSore((state) => state.username);
  console.log(`username is ${username}`);




  if (username != null) {
    (async () => {
      try {
        const repo_url = `https://api.github.com/users/${username}/repos`;
        const result = await fetch(repo_url);
        const display = await result.json();
        console.log(display);
        setRepositories(json);
      } catch (error) {
        console.log("error occured");
      }
    })();
  }

  return (
    <section className="right-side">
      <h1 className="title">repositories</h1>

      <div className="container">
        {repositories.map((repo) => (
          <section className="Repos">
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
            <div className="bottom">
              <p>{repo.forks_count} forks</p>
              <p>{repo.stargazers_count} stars</p>
            </div>
            </section>
    
        ))}
      </div>
    </section>
  );
};

export default Repos;
