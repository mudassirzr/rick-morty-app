import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

export default function AppHead() {
  return (
    <Box sx={{background: grey[300]}} mb={5} py={10} width={"100%"}>
        <Container disableGutters maxWidth="lg">
            <Typography fontWeight={800} variant="h1">The Rick and Morty App</Typography>
        </Container>
      
    </Box>
  );
}
