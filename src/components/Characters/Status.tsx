import { Typography } from '@mui/material';
import { yellow, red, green } from '@mui/material/colors';

export default function CharacterStatus ({status}:{status: string}){
    const getStatusColor = () => {
        switch (status) {
            case "Alive":
                return green[700];
            case "Dead":
                return red[700];
            case "unknown":
                return yellow[700];
        }
    }
    return (
        <Typography variant="body2" sx={{textTransform: 'capitalize', margin: '0px'}} color={getStatusColor()}>
            {status}
        </Typography>
    )
}