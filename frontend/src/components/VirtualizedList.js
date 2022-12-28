import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

function renderRow(props) {
  const { index, style } = props;
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton
        sx={{
          bgcolor: "#E3F2FD",
          textAlign: "center",
          color: "rgb(101, 106, 197)",
          cursor: "pointer",
        }}
      >
        <ListItemText primary={`Чат ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <Box>
      <FixedSizeList
        height={450}
        width="auto"
        itemSize={60}
        itemCount={14}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
