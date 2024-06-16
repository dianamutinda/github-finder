import "./Home.css";
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import useDataSore from "../Store/Store";

import { useState } from "react";

const Home = () => {
  const [img, setImg] = useState(null);
  const [login, setLogin] = useState(null);
  const [company, setCompany] = useState(null);
  const [url, setUrl] = useState(null);
  const [location, setLocation] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);
  const [name, setName] = useState(null);

  const username = useDataSore((state) => state.username);
  console.log(`username is ${username}`);

  if (username != null) {
    (async () => {
      try {
        const api_url = `https://api.github.com/users/${username}`;
        const response = await fetch(api_url);
        const display = await response.json();
        console.log(display);

        setImg(display.avatar_url);
        setLogin(display.login);
        setCompany(display.company);
        setUrl(display.html_url);
        setLocation(display.location);
        setRepos(display.repos);
        setFollowers(display.followers);
        setFollowing(display.following);
      } catch (error) {
        console.log("error occured");
      }
    })();
  }

  const captureUsername = useDataSore((state) => state.captureUsername);

  const handleUsername = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(username);
    captureUsername(name);
  };

  return (
    <section>
      <div className="header">
        <header className="header-text">
          <h1 className="logo">github finder</h1>
          <p className="link">
            by <a href="">diana mwende</a>
          </p>
          <div className="search">
            <input
              type="text"
              placeholder="enter a username"
              onChange={handleUsername}
            />
            <button type="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </header>
      </div>

      <div className="left-side">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <h2>{login}</h2>
        <p>{company}</p>
        <div className="btn">
          <a href={url} target="blank">
            <FaArrowUpRightFromSquare /> view on github
          </a>
        </div>
        <div className="user-info">
          <p className="icons">
            <IoLocationOutline />
            {location}
          </p>
          <p className="icons">
            <RiGitRepositoryFill />
            {repos} repository
          </p>
          <p className="icons">
            <MdGroups />
            {followers} followers
          </p>
          <p className="icons">
            <MdGroups />
            {following} following
          </p>
        </div>
      </div>
    </section>
  );
};
export default Home;
