import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("One Pet", "8x10", "Single Color", "$85"),
  createData("One Pet", "9x12", "Single Color", "$95"),
  createData("One Pet", "11x14", "Single Color", "$105"),
  createData("One Pet", "8x10", "Full", "$100"),
  createData("One Pet", "9x12", "Full", "$110"),
  createData("One Pet", "11x14", "Full", "$125"),
  createData("One Person", "8x10", "Single Color", "$105"),
  createData("One Person", "9x12", "Single Color", "$125"),
  createData("One Person", "11x14", "Single Color", "$145"),
  createData("One Person", "8x10", "Full", "$120"),
  createData("One Person", "9x12", "Full", "$140"),
  createData("One Person", "11x14", "Full", "$160"),
];

export default function Pricing() {
  return (
    <div style={{ margin: "40px", marginTop: "140px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Number of Subjects (Add $20 Per Extra Pet / $30 Per Extra
                Person)
              </StyledTableCell>
              <StyledTableCell align="right">Canvas Size</StyledTableCell>
              <StyledTableCell align="right">Background Style</StyledTableCell>
              <StyledTableCell align="right">Total Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
