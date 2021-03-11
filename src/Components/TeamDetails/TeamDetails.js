import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import image from "../../Photo/male.png";
import image2 from "../../Photo/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
  const { teamId } = useParams();
  const [TeamDetail, setTeamDetail] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetail(data.teams[0]));
  }, []);
  const {
    strTeam,
    intFormedYear,
    strCountry,
    strStadium,
    strGender,
    strStadiumDescription,
    strTeamBadge,
  } = TeamDetail;
  let gender = strGender;
  if (gender === "Male") {
    gender = <img src={image} alt="" />;
  } else {
    gender = <img src={image2}></img>;
  }
  return (
    <div className="detail-div">
      <div className="banner-image">
        <img src={strTeamBadge} alt="" />
      </div>
      <div className=" detail-container container">
        <div>
          <h1> {strTeam}</h1>
          <h2>
            <small>Formed: {intFormedYear}</small>
          </h2>
          <h2>
            <small>Country: {strCountry}</small>
          </h2>
          <h2>
            <small>Stadium: {strStadium}</small>
          </h2>
        </div>
        <div className="rendered-image">{gender}</div>
      </div>
      <div className=" description container">{strStadiumDescription}</div>

      <div className="d-flex justify-content-center social-link">
        <h1>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </h1>
        <h1>
          <a href="https://twitter.com/?lang=en">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </h1>
        <h1>
          <a href="https://www.youtube.com/">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </h1>
      </div>
    </div>
  );
};

export default TeamDetails;
