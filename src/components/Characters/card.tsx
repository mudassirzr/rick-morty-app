import { Grid } from "@mui/material";
import { characterResult } from "state/types";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CharacterStatus from "./Status";
import { Link, useNavigate } from "react-router-dom";
import EnhancedCard from "components/common/GridCard";

export default function CharacterCard(props: {
  character: characterResult;
  key: number;
}) {
  const { character } = props;
  let navigate = useNavigate();

  return (
    <EnhancedCard>
      <CardMedia
        component="img"
        height="200"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        {/* <Link > */}
        <Typography
          sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
          onClick={() => navigate(`/characters/${character.id}`)}
          variant="h6"
        >
          {character.name} - {character.gender}
        </Typography>
        {/* </Link> */}
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Grid container>
          <Grid xs={12}>
            <Typography variant="body2" color="text.secondary">
              First Seen in:{" "}
              <br/>
              <Link to={`/episode/${character.episode[0]?.id}`}>{character.episode[0].name}</Link>
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant="body2" color="text.secondary">
              Last known location
              <br />
              <Link to={`/locations/${character?.location?.id}`}>{character.location.name}</Link>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Species:
          <br />
          {character.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status:
          <CharacterStatus status={character.status} />
        </Typography>
      </CardContent>
    </EnhancedCard>
  );
}
