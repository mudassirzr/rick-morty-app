import { Grid } from "@mui/material";
import { locationResult } from "state/types";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import EnhancedCard from "components/common/GridCard";

export default function LocationCard(props: {
  location: locationResult;
  key: number;
}) {
  const { location } = props;
  let navigate = useNavigate();

  return (
    <EnhancedCard>
      <CardContent>
        {/* <Link > */}
        <Typography
          sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
          onClick={() => navigate(`/locations/${location.id}`)}
          variant="h6"
        >
          {location.name}
        </Typography>
        {/* </Link> */}
      </CardContent>
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <Grid container>
          <Grid xs={12}>
            <Typography variant="body2" color="text.secondary">
              <strong>Dimension:</strong>
              <br />
              {location.dimension}
            </Typography>
            
          </Grid>
          <Grid xs={12}>
            <Typography variant="body2" color="text.secondary">
            <strong>Type:</strong>
              <br />
              {location.type}
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
          Created:
          <br />
          {new Date(location.created).toDateString()}
        </Typography>
      </CardContent>
    </EnhancedCard>
  );
}
