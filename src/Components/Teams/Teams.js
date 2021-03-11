import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Teams.css";

const Teams = (props) => {
  const teams = props.team;
  const { idTeam, strTeam } = props.team;

  return (
    <Card className="text-center squad-info" style={{ width: "18rem" }}>
      <Card.Img className="team-image" variant="top" src={teams.strTeamBadge} />
      <Card.Body>
        <Card.Title>{strTeam}</Card.Title>
        <Card.Text>{teams.strSport}</Card.Text>

        <Link to={`/team/${idTeam}`}>
          <Button variant="primary">Explore</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Teams;
