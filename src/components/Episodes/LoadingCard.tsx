import { Grid, Skeleton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EnhancedCard from "components/common/GridCard";

export default function EpisodeCardLoading() {
  return (
    <EnhancedCard>
      <CardContent>
        <Typography variant="h5">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={"100%"}
            height={40}
          />
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Grid spacing={2} container>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <strong>Code: </strong>
            </Typography>
            <Skeleton
              animation="wave"
              variant="rounded"
              width={100}
              height={20}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              <strong>Air Date:</strong>
            </Typography>
            <Skeleton
              animation="wave"
              variant="rounded"
              width={100}
              height={20}
            />
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
          <Skeleton
            animation="wave"
            variant="rounded"
            width={100}
            height={20}
          />
        </Typography>
      </CardContent>
    </EnhancedCard>
  );
}
