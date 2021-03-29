import "./AppStyles.js";
import './App.css'
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";

import IncomeExpense from "./components/Income-Expense/IncomeExpense";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <IncomeExpense title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <ExpenseTracker />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <IncomeExpense title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} >
          <IncomeExpense title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer >
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
