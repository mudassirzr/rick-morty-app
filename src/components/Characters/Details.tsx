import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { characterResult } from "state/types";
import { getCharacterDetails } from "services/api";
import DetailsCard from "components/common/DetailsCard";
import DetailsCardLoading from "components/common/DetailsCardLoading";
export default function CharacterDetails({ id }: { id: number }) {
  const [characterDetails, setCharacterDetails] =
    useState<characterResult | null>(null);

  useEffect(() => {
    (async () => {
      const resp = await getCharacterDetails(id);
      const details = await resp.json();
      setCharacterDetails(details?.data?.character);
    })();
  }, [id]);
  return (
    <>
      <Typography variant="h2" mb={3} fontWeight={400}>
        {characterDetails?.name?`Character - ${characterDetails?.name}`:<Skeleton height={80} width={300} />}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Container disableGutters maxWidth="lg">
          {characterDetails ? (
            <DetailsCard data={characterDetails} />
          ) : (
            <DetailsCardLoading showAvatar={true} />
          )}
        </Container>
      </Box>
    </>
  );
}
