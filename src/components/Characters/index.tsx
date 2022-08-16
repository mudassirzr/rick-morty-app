import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { characterActionCreators, State } from "state";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { characterResult, charactersState } from "state/types";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useCallback, useEffect } from "react";
import Pagination from "components/Pagination";
import { getCharactersData } from "services/api";
import CharacterCard from "./card";
export default function Characters() {
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
      const response = await getCharactersData(page);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      data?.data?.characters && setCharactersData(data?.data?.characters);
    },
    [setCharactersData]
  );
  useEffect(() => {
    results.length === 0 && fetchCharacters();
  }, []);
  return (
    <>
      <h1>Characters</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          {results.map((character: characterResult) => (
            <Grid item xs={12} sm={6}>
              <CharacterCard key={character.id} character={character} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {
        <Pagination
          {...info}
          onChangePage={(page: number) => fetchCharacters(page)}
        />
      }
    </>
  );
}
