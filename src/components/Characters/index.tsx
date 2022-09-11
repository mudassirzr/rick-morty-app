import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { characterActionCreators, State } from "state";
import { characterResult, charactersState } from "state/types";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useCallback, useEffect, useState } from "react";
import Pagination from "components/Pagination";
import { getCharactersData } from "services/api";
import CharacterCard from "./Card";
import CharacterCardLoading from "./LoadingCard";
import { Grid, Typography } from "@mui/material";
import { Box, shadows } from "@mui/system";
export default function Characters() {
  const [loading, setLoading] = useState(false);
  const characters: charactersState = useSelector(
    (state: State) => state.characters,
    shallowEqual
  );
  const { results, info } = characters;
  const dispatch = useDispatch();
  const { setCharactersData } = bindActionCreators(
    characterActionCreators,
    dispatch
  );
  const fetchCharacters = useCallback(
    async (page: number = 1) => {
      setLoading(true);
      const response = await getCharactersData(page);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      data?.data?.characters && setCharactersData(data?.data?.characters);
      setLoading(false);
    },
    [setCharactersData]
  );
  useEffect(() => {
    Object.values(results).length === 0 && fetchCharacters();
  }, []);
  return (
    <>
      <Typography variant="h2" mb={3} fontWeight={400}>
        Characters
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid mb={1} container spacing={2}>
          {!loading
            ? Object.values(results).map((character: characterResult) => (
                <CharacterCard key={character.id} character={character} />
              ))
            : [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((el, i) => <CharacterCardLoading />)}
        </Grid>
      </Box>
      {
        <Pagination
          {...info}
          loading={loading}
          onChangePage={(page: number) => fetchCharacters(page)}
        />
      }
    </>
  );
}
