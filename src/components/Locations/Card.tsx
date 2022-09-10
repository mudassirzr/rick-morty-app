import { Grid } from "@mui/material";
import { locationResult } from "state/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function LocationCard(props: {
  location: locationResult;
  key: number;
}) {
  const { location } = props;
  let navigate = useNavigate();

  return (
    <Card elevation={3} sx={{ minWidth: 250, alignSelf: 'stretch' }}>
      <CardContent>
        {/* <Button > */}
          <Typography sx={{cursor: 'pointer', ":hover": { textDecoration: 'underline'}}} onClick={() => navigate(`/location/${location.id}`)} variant="h5">
            {location.name}
          </Typography>
        {/* </Button> */}
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Grid container>
          <Grid xs={12}>
            <Typography variant="body2" color="text.secondary">
              Dimension:{" "}
            </Typography>
            <Button size="small">{location.dimension}</Button>
          </Grid>
          <Grid xs={12}>
            <Typography variant="body2" color="text.secondary">
              Type
            </Typography>
            <Button size="small">{location.type}</Button>
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
          {new Date(location.created).toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
