import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { locationResult } from "state/types";
import { getLocationDetails } from "services/api";
import DetailsCard from "components/common/DetailsCard";
import { Container } from "@mui/system";
import DetailsCardLoading from "components/common/DetailsCardLoading";
export default function LocationDetails({ id }: { id: number }) {
  const [locationDetails, setLocationDetails] = useState<locationResult | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const resp = await getLocationDetails(id);
      const details = await resp.json();
      setLocationDetails(details?.data?.location);
    })();
  }, [id]);
  return (
    <>
      <Typography variant="h2" mb={3} fontWeight={400}>
        Locations
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Container disableGutters maxWidth="lg">
          {locationDetails ? (
            <DetailsCard data={locationDetails} />
          ) : (
            <DetailsCardLoading />
          )}
        </Container>
      </Box>
    </>
  );
}
