import { Grid } from "@mui/material";
import { episodeResult } from "state/types";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import EnhancedCard from "components/common/GridCard";

export default function EpisodeCard(props: {
  episode: episodeResult;
  key: number;
}) {
  const { episode } = props;
  let navigate = useNavigate();

  return (
    <EnhancedCard>
      <CardContent>
        {/* <Link > */}
        <Typography
          sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
          onClick={() => navigate(`/episode/${episode.id}`)}
          variant="h6"
        >
          {episode.name}
        </Typography>
        {/* </Link> */}
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Grid container>
          <Grid xs={6}>
            <Typography variant="body2" color="text.secondary">
              <strong>Code:{" "}</strong>
              <br />{episode.episode}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body2" color="text.secondary">
              <strong>Air Date:</strong>
              <br/>
              {episode.air_date}
            </Typography>
            <Typography>{}</Typography>
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
          <strong>Created:</strong>
          <br />
          {new Date(episode.created).toDateString()}
        </Typography>
      </CardContent>
    </EnhancedCard>
  );
}
