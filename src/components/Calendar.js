import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useState } from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  display: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
export default function BasicDatePicker() {
  const classes = useStyles();
  const [value, setValue] = React.useState(new Date());
  const [day, setDay] = useState(value);

  const workouts = [
    {
      workoutDay: 10,
      name: "bench press",
    },
    {
      workoutDay: 11,
      name: "squat",
    },
  ];
  const workName = workouts
    .filter((el) => el.workoutDay === day.getDate())
    .map((el) => el.name);
  return (
    <>
      <div className={classes.display}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Choose day"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setDay(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        {/* <WorkoutInput />

        <div>Workout day: {day.getDate()}</div>
        <div>Exercise name: {workName}</div> */}
      </div>
    </>
  );
}
