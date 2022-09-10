import { Grid } from "@mui/material";
import { characterResult } from "state/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CharacterStatus from "./Status";
import { useNavigate } from "react-router-dom";

export default function CharacterCard(props: {
  character: characterResult;
  key: number;
}) {
  const { character } = props;
  let navigate = useNavigate();

  return (
    <Card elevation={3} sx={{ minWidth: 250, alignSelf: 'stretch' }}>
      <CardMedia
        component="img"
        height="200"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        {/* <Button > */}
          <Typography sx={{cursor: 'pointer', ":hover": { textDecoration: 'underline'}}} onClick={() => navigate(`/character/${character.id}`)} variant="h5">
            {character.name} - {character.gender}
          </Typography>
        {/* </Button> */}
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Grid container>
          <Grid xs={12}>
            <Typography variant="body2" color="text.secondary">
              First Seen in:{" "}
            </Typography>
            <Button size="small">{character.episode[0].name}</Button>
          </Grid>
          <Grid xs={12}>
            <Typography variant="body2" color="text.secondary">
              Last known location
            </Typography>
            <Button size="small">{character.location.name}</Button>
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
    </Card>
  );
}