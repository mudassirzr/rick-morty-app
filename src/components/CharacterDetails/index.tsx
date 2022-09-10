import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { characterActionCreators, State } from "state";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { characterResult, charactersState } from "state/types";
import { bindActionCreators } from "@reduxjs/toolkit";
import { Typography } from "@mui/material";
export default function CharacterDetails({id}:{id:number}) {
  const characters: charactersState = useSelector(
    (state: State) => state.characters,
    shallowEqual
  );
  const { results } = characters;
  const dispatch = useDispatch();
  
  return (
    <>
      <Typography variant="h2" mb={3} fontWeight={400}>Characters</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          
        </Grid>
      </Box>
    </>
  );
}
