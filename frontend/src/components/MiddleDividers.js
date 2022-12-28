import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function MiddleDividers() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "95%",
        bgcolor: "#E3F2FD",
        margin: "30px auto",
      }}
    >
      <Divider variant="middle" />
    </Box>
  );
}
