import React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";

export default function EnhancedCard(props: {children:React.ReactNode}){
    return (
        <Grid item  xs={12} sm={6} md={3} display={"flex"}>
            <Card elevation={3} sx={{ minWidth: 250, alignSelf: 'stretch', display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                {props.children}
            </Card>
        </Grid>
    )
}