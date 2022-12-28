import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import VirtualizedList from "./VirtualizedList";
import "./FullWidthGrid.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }} className = "Box">
      <Grid container spacing={0} columns={24}>
        <Grid xsOffset={1} xs={6} md={6}>
          <Item>
            <VirtualizedList />
          </Item>
        </Grid>
        <Grid xsOffset={2} xs={14} md={14}>
          <div className="screen">
            <h2>{props.items[0].name}</h2>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
