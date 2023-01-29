import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

function RsvpTable() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(data, error, loading);
  const headers = [
    { label: "Name", key: "name" },
    { label: "Response", key: "response" },
    { label: "Starter", key: "starter" },
    { label: "Main", key: "main" },
    { label: "Dessert", key: "dessert" },
    { label: "Comments", key: "comments" },
  ];
  useEffect(() => {
    fetch("http://localhost:27017/weddingRsvp")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setError(error);
        }
      )
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  } else
    return (
      <Box p={5}>
        <CSVLink
          filename="rsvps.csv"
          headers={headers}
          data={data}
          style={{ textDecoration: "none" }}
        >
          <Button fullWidth margin="dense" color="primary" variant="contained">
            Export to csv
          </Button>
        </CSVLink>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name:</TableCell>
              <TableCell>Response:</TableCell>
              <TableCell>Starter:</TableCell>
              <TableCell>Main:</TableCell>
              <TableCell>Dessert:</TableCell>
              <TableCell>Comments:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data, i) => {
              const { name, response, starter, main, dessert, comments } = data;
              return (
                <tr key={i}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{response}</TableCell>
                  <TableCell>{starter ? starter : "---"}</TableCell>
                  <TableCell>{main ? main : "---"}</TableCell>
                  <TableCell>{dessert ? dessert : "---"}</TableCell>
                  <TableCell>{comments}</TableCell>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    );
}

export default RsvpTable;
