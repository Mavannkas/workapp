import Calendar from "./components/Calendar";

import { makeStyles } from "@material-ui/core";

import MultiTables from "./components/MultiTables";

const useStyles = makeStyles({
  display: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.display}>
        <Calendar />
        <MultiTables />
      </div>
    </div>
  );
}

export default App;
