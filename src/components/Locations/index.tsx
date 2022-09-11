import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { locationActionCreators, State } from "state";
import { locationResult, locationsState } from "state/types";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useCallback, useEffect, useState } from "react";
import Pagination from "components/Pagination";
import { getLocationsData } from "services/api";
import LocationCard from "components/Locations/Card";
import LocationCardLoading from "components/Locations/LoadingCard";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function Locations() {
  const [loading, setLoading] = useState(false);
  const locations: locationsState = useSelector(
    (state: State) => state.locations,
    shallowEqual
  );
  const { results, info } = locations;
  const dispatch = useDispatch();
  const { setLocationsData } = bindActionCreators(
    locationActionCreators,
    dispatch
  );
  const fetchLocations = useCallback(
    async (page: number = 1) => {
      setLoading(true);
      const response = await getLocationsData(page);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      data?.data?.locations && setLocationsData(data?.data?.locations);
      setLoading(false);
    },
    [setLocationsData]
  );
  useEffect(() => {
    Object.values(results).length === 0 && fetchLocations();
  }, []);
  return (
    <>
      <Typography variant="h2" mb={3} fontWeight={400}>
        Locations
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid mb={1} container spacing={2}>
          {!loading
            ? Object.values(results).map((location: locationResult) => (
                <LocationCard key={location.id} location={location} />
              ))
            : [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((el, i) => <LocationCardLoading />)}
        </Grid>
      </Box>
      {
        <Pagination
          {...info}
          loading={loading}
          onChangePage={(page: number) => fetchLocations(page)}
        />
      }
    </>
  );
}
