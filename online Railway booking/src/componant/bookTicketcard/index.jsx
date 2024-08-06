// import React from 'react'

import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function TrainCard({ TrainName, TrainNo, ArrivalTime, departureTime }) {
  return (
    <Box
      boxShadow={
        "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"
      }
      p={3}
    >
      <Stack flexDirection={"row"} justifyContent={"space-between"} p={1}>
        <Typography>
          {" "}
          <strong>TrainName:</strong>
          {TrainName}
        </Typography>
        <Typography>
          <strong>TrainNo:</strong>
          {TrainNo}
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} justifyContent={"space-between"} p={1}>
        <Typography>
          <strong>ArrivalTime:</strong>
          {ArrivalTime}
        </Typography>
        <Typography>
          {" "}
          <strong>DepartureTime:</strong>
          {departureTime}
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} justifyContent={"flex-end"} py={1}>
        <Link href="/booknow" underline="hover">
          <Typography>Book Now</Typography>
        </Link>
      </Stack>
    </Box>
  );
}

export default TrainCard;
