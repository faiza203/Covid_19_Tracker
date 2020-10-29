import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
const Cards = ({data : {confirmed ,recovered , deaths , lastUpdate}}) => {
    if(!confirmed){
        return "Loading"
    }
    return <div className="contanier"><Grid contanier spacing={3} justify="center">
    <Grid item component={Card}>
    <CardContent>
    <Typography color="textSecondary" gutterBottom>Infected</Typography>
    <Typography variant="45">{confirmed.value}</Typography>
    <Typography color="textSecondary" >Real Data</Typography>
    <Typography variant="body2">Number of active cases of COVID-19</Typography>
    </CardContent></Grid>
    <Grid item component={Card}>
    <CardContent>
    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
    <Typography variant="45">Real Data</Typography>
    <Typography color="textSecondary" >Real Data</Typography>
    <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
    </CardContent></Grid>
    <Grid item component={Card}>
    <CardContent>
    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
    <Typography variant="45">Real Data</Typography>
    <Typography color="textSecondary" >Real Data</Typography>
    <Typography variant="body2">Number of deaths cases of COVID-19</Typography>
    </CardContent></Grid>
    </Grid></div>
}
export default Cards;