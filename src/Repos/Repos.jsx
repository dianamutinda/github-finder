import { useState } from "react";
import "./Repos.css";
import useDataSore from "../Store/Store";
const Repos = () => {
  const [repositories, setRepositories] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  
  const username = useDataSore(state => state.username);
  console.log(`username is ${username}`);




  if (username != null) {
    (async () => {
      try {
        const rep_url = `https://api.github.com/users/${username}/repos`;
        const result = await fetch(rep_url);
        const display = await result.json();
        console.log(display);
        setRepositories(display);
      } catch (error) {
        console.log("error occured");
        setRepositories("error occured please check your internet connection")
      }
    })();
  }

  
  if (username != null) {
    (async () => {
      try {
        const followers_url = `https://api.github.com/users/${username}/followers`;
        const result = await fetch(followers_url);
        const display = await result.json();
        console.log(display);
        setFollowers(display);
      } catch (error) {
        console.log("error occured");
      }
    })();
  }

    
  if (username != null) {
    (async () => {
      try {
        const following_url = `https://api.github.com/users/${username}/following`;
        const result = await fetch(following_url);
        const display = await result.json();
        console.log(display);
        setFollowing(display);
      } catch (error) {
        console.log("error occured");
      }
    })();
  }


  return (
    <section className="right-side">
      <h1 className="title">repositories</h1>

      <div className="container">
        {repositories.map(repo => (
          <section className="Repos" key={repo.id}>
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
            <div className="bottom">
              <p>{repo.forks_count} forks</p>
              <p>{repo.stargazers_count} stars</p>
            </div>
            </section>
    
        ))}
      </div>

      <div className="follow">
        {followers.map(follows => (
          <section className="follows" key={follows.id}>
            <img src={follows.avatar_url} alt="" />
            <h4>{follows.login}</h4>
            <a href={follows.html_url}>view</a>

          </section>
        ))}
      </div>

      <div className="follow">
        {following.map(follow => (
          <section className="follows" key={follow.id}>
            <img src={follow.avatar_url} alt="" />
            <h4>{follow.login}</h4>
            <a href={follow.html_url}>view</a>

          </section>
        ))}
      </div>


    </section>
  );
};

export default Repos;
