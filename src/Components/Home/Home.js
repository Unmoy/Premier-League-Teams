import { useEffect } from "react";
import { useState } from "react";
import Banner from "../Banner/Banner";
import Teams from "../Teams/Teams";

import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState({});
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, [teams]);

  return (
    <div className="home-div">
      <Banner></Banner>
      <div className="team-container container mt-5">
        {teams &&
          !!teams.length &&
          teams.map((team) => <Teams team={team}> </Teams>)}
      </div>
    </div>
  );
};
export default Home;
