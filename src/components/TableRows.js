import React from "react";

import TextField from "@mui/material/TextField";
import TableCell from "@mui/material/TableCell";

import ClearIcon from "@mui/icons-material/Clear";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

function TableRows({ rowsData, handleChange, sets, handleDeleteClick }) {
  return rowsData.map((data, index) => {
    const { reps, weight, id } = data;
    return (
      <TableRow key={index}>
        <TableCell align="center">
          <Typography sx={{ maxWidth: 70 }}>{index + 1}</Typography>
        </TableCell>
        <TableCell align="center">
          <TextField
            onChange={(event) => {
              handleChange(index, event);
            }}
            sx={{ maxWidth: 50 }}
            value={reps}
            type="number"
            variant="standard"
            name="reps"
          />
        </TableCell>
        <TableCell align="center">
          <TextField
            onChange={(event) => {
              handleChange(index, event);
            }}
            sx={{ maxWidth: 50 }}
            value={weight}
            name="weight"
            type="number"
            variant="standard"
          />
        </TableCell>
        <TableCell>
          <Button onClick={() => handleDeleteClick(id)}>
            <ClearIcon sx={{ color: "red" }} />
          </Button>
        </TableCell>
      </TableRow>
    );
  });
}

export default TableRows;
