import {
  Avatar,
  Divider,
  List,
  ListItem,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function DetailsCardLoading({
  showAvatar,
}: {
  showAvatar?: Boolean;
}) {
  return (
    <Box>
      <Paper
        sx={{ padding: "1rem", marginTop: "2rem", width: "100%" }}
        elevation={3}
      >
        {showAvatar ? (
          <Avatar
            alt={"loading"}
            sx={{ width: 200, height: 200, margin: "0 auto" }}
          />
        ) : null}
        <List>
          {[1, 2, 3, 4, 5, 6, 7].map((i: number) => {
            return (
              <>
                <ListItem>
                  <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={100}
                    height={20}
                  />{" "}
                  :{" "}
                  <Skeleton
                    animation="wave"
                    variant="rounded"
                    width={400}
                    height={20}
                  />
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </Paper>
    </Box>
  );
}
