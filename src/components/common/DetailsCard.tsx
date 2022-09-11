import { Avatar, Divider, List, ListItem, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link as BrowserLink } from "react-router-dom";

export default function DetailsCard(props: any) {
  const { data } = props;
  const image = data?.image
  if(data?.image) delete data['image']
  return (
    <Box>
    <Paper sx={{padding: '1rem', marginTop: '2rem', width: '100%'}} elevation={3}>
      {image ? (
        <Avatar
          alt={data?.name}
          sx={{ width: 200, height: 200, margin: '0 auto' }}
          src={image}
        />
      ) : null}
      {data ? (
        <List>
          {Object.keys(data).map((key: string, i: number) => {
            return (
              <>
                <ListItem>
                  <Typography
                    textTransform={"capitalize"}
                    variant="body1"
                    key={i}
                  >
                    <strong>{key.replace(/_/g, ' ')}:{" "}</strong>
                    {Array.isArray(data[key])
                      ? data[key].map((e: any) => (
                          <>
                            {" "}
                            <BrowserLink to={`/${key}/${e?.id}`}>
                              {e.name}
                            </BrowserLink>
                            ,{" "}
                          </>
                        ))
                      : typeof data[key] == "object"
                      ? data[key]?.name
                      : data[key]}
                  </Typography>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      ) : (
        "No data found"
      )}
    </Paper>
    </Box>
  );
}
