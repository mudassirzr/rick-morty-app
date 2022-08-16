import { Grid, Paper } from "@mui/material";
import { characterResult } from "state/types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CharacterCard(props: {
  character: characterResult;
  key: number;
}) {
  const { character } = props;
  return (
      <Card elevation={3} sx={{ minWidth: 250 }}>
        <CardMedia
          component="img"
          height="200"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', alignItems: 'start'}}>
            <Grid xs={12}>
                First Seen in: <br/>
                <Button size="small">{character.episode[0]?.name}</Button>
            </Grid>
            <Grid xs={12}>
                Last known location<br/>
                <Button size="small">{character.location.name}</Button>
            </Grid>
        </CardActions>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {character.species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {character.type}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {character.status}
            </Typography>
        </CardContent>
        
      </Card>
  );
}
