import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export default function Navigation() {
  return (
    <nav>
      <Typography sx={{textAlign: 'right'}}>
        <Link>
          <RouterLink to="/">Home</RouterLink>
        </Link>{" "}
        |{" "}
        <Link>
          <RouterLink to="locations">Locations</RouterLink>
        </Link>{" "}
        |{" "}
        <Link>
          <RouterLink to="episodes">Episodes</RouterLink>
        </Link>
      </Typography>
    </nav>
  );
}
