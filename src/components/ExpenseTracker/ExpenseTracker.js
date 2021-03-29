import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Cardider,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "../List/List";
import { ExpenseTrackerContext } from "../../context/context";
import InfoCard from '../Snackbar/InfoCard'

export default function ExpenseTracker() {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
