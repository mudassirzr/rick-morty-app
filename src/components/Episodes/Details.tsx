import Box from "@mui/material/Box";
import { Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { episodeResult } from "state/types";
import { getEpisodeDetails } from "services/api";
import DetailsCard from "components/common/DetailsCard";
import { Container } from "@mui/system";
import DetailsCardLoading from "components/common/DetailsCardLoading";
export default function EpisodeDetails({ id }: { id: number }) {
  const [episodeDetails, setEpisodeDetails] = useState<episodeResult | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const resp = await getEpisodeDetails(id);
      const details = await resp.json();
      setEpisodeDetails(details?.data?.episode);
    })();
  }, [id]);
  return (
    <>
      <Typography variant="h2" mb={3} fontWeight={400}>
      {episodeDetails?.name?`Episode - ${episodeDetails?.name}`:<Skeleton height={80} width={300} />}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Container disableGutters maxWidth="lg">
          {episodeDetails ? (
            <DetailsCard data={episodeDetails} />
          ) : (
            <DetailsCardLoading />
          )}
        </Container>
      </Box>
    </>
  );
}
