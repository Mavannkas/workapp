import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import { nanoid } from "nanoid";
import WorkoutInput from "./WorkoutInput";
import TableRows from "./TableRows";

export default function BasicTable({ count, setCount, remove }) {
  const [sets, setSets] = useState(null);
  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    const rowsInput = {
      id: nanoid(),
      reps: "",
      weight: "",
    };

    setRowsData([...rowsData, rowsInput]);
    setSets(sets + 1);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
  let sum;
  rowsData.map((el) => {
    sum = el.weight * el.reps;
    sum = sum * sets;
  });

  const handleDeleteClick = (dataId) => {
    const newRowsData = [...rowsData];
    const index = rowsData.findIndex((el) => el.id === dataId);
    newRowsData.splice(index, 1);
    setRowsData(newRowsData);
    setSets(sets - 1);
  };
  return (
    <div className="border">
      <WorkoutInput />
      <TableContainer component={Paper} sx={{ maxWidth: 600, marginTop: 2 }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }} align="center">
                Set
              </TableCell>
              <TableCell sx={{ textAlign: "center" }} align="center">
                Reps
              </TableCell>
              <TableCell sx={{ textAlign: "center" }} align="center">
                Weight (kg)
              </TableCell>
              <TableCell sx={{ width: 100 }}>
                <Button variant="contained" size="small" onClick={addTableRows}>
                  add set
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRows
              sets={sets}
              rowsData={rowsData}
              handleChange={handleChange}
              handleDeleteClick={handleDeleteClick}
            />
          </TableBody>
        </Table>
        <div>total weight: {sum}kg</div>
      </TableContainer>
      <Button
        // onClick={removeClick}
        onClick={remove}
        sx={{ marginLeft: 23 }}
        variant="contained"
      >
        Remove exercise
      </Button>
      <Table />
    </div>
  );
}
