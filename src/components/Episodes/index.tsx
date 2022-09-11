import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { episodeActionCreators, State } from "state";
import { episodeResult, episodesState } from "state/types";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useCallback, useEffect, useState } from "react";
import Pagination from "components/Pagination";
import { getEpisodesData } from "services/api";
import EpisodeCard from "components/Episodes/Card";
import EpisodeCardLoading from "components/Episodes/LoadingCard";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function Episodes() {
  const [loading, setLoading] = useState(false);
  const episodes: episodesState = useSelector(
    (state: State) => state.episodes,
    shallowEqual
  );
  const { results, info } = episodes;
  const dispatch = useDispatch();
  const { setEpisodesData } = bindActionCreators(
    episodeActionCreators,
    dispatch
  );
  const fetchEpisodes = useCallback(
    async (page: number = 1) => {
      setLoading(true);
      const response = await getEpisodesData(page);
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      data?.data?.episodes && setEpisodesData(data?.data?.episodes);
      setLoading(false);
    },
    [setEpisodesData]
  );
  useEffect(() => {
    Object.values(results).length === 0 && fetchEpisodes();
  }, []);
  return (
    <>
      <Typography variant="h2" mb={3} fontWeight={400}>
        Episodes
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid mb={1} container spacing={5}>
          {!loading
            ? Object.values(results).map((episode: episodeResult) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))
            : [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((el, i) => (
                <EpisodeCardLoading />
              ))}
        </Grid>
      </Box>
      {
        <Pagination
          {...info}
          loading={loading}
          onChangePage={(page: number) => fetchEpisodes(page)}
        />
      }
    </>
  );
}
