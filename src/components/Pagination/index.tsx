import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { PaginationProps } from "./types";
import {  } from '@mui/material/colors';

export default function Pagination(props: PaginationProps) {
  const { pages, next, prev, onChangePage, loading } = props;
  return (
    <Grid container bgcolor={"white"} px={2} position={"sticky"} bottom={"0"} alignItems={"center"} justifyContent={"space-between"}>
      <Grid xs={6}>
        <Typography variant="body1">
          Page <strong>{next ? next - 1 : prev ? prev + 1 : 1}</strong> of{" "}
          <strong>{pages}</strong>
        </Typography>
      </Grid>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Previous Page">
          <IconButton
            disabled={prev === null || loading}
            onClick={() => (prev === null ? null : onChangePage(prev))}
            aria-label="delete"
          >
            {"<"}
          </IconButton>
        </Tooltip>
        <Tooltip title="Next Page">
          <IconButton
            disabled={next === null || loading}
            onClick={() => (next === null ? null : onChangePage(next))}
            aria-label="delete"
          >
            {">"}
          </IconButton>
        </Tooltip>
      </Stack>
    </Grid>
  );
}
