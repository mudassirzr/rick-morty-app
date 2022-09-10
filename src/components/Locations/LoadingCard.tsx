import { Grid, Skeleton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CharacterCardLoading() {
    console.log('herere')
  return (
    <Card elevation={3} sx={{ minWidth: 250, alignSelf: "stretch" }}>
      <CardContent>
        <Typography
          variant="h5"
        >
          <Skeleton animation="wave" variant="rounded" width={'100%'} height={40} />
        </Typography>
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Grid spacing={2} container>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Dimension:{" "}
            </Typography>
            <Skeleton animation="wave" variant="rounded" width={100} height={20} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Type:
            </Typography>
            <Skeleton animation="wave" variant="rounded" width={100} height={20} />
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
          <Skeleton animation="wave" variant="rounded" width={100} height={20} />
        </Typography>
        
      </CardContent>
    </Card>
  );
}
