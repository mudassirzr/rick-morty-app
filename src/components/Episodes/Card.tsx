import { Grid } from "@mui/material";
import { episodeResult} from "state/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function EpisodeCard(props: {
  episode: episodeResult;
  key: number;
}) {
  const { episode } = props;
  let navigate = useNavigate();

  return (
    <Card elevation={3} sx={{ minWidth: 250, alignSelf: 'stretch' }}>
      <CardContent>
        {/* <Button > */}
          <Typography sx={{cursor: 'pointer', ":hover": { textDecoration: 'underline'}}} onClick={() => navigate(`/episodes/${episode.id}`)} variant="h5">
            {episode.name}
          </Typography>
        {/* </Button> */}
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Grid container>
          <Grid xs={6}>
            <Typography variant="body2" color="text.secondary">
              Code:{" "}
            </Typography>
            <Button size="small">{episode.episode}</Button>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body2" color="text.secondary">
              Air Date:
            </Typography>
            <Typography>{episode.air_date}</Typography>
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
          Created:
          <br />
          {new Date(episode.created).toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
