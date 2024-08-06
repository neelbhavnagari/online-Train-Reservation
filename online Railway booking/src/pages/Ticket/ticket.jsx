// import React from 'react'card

import { Grid, Stack, Typography } from "@mui/material";
import { cardata } from "../../store/Carddata";
import TrainCard from "../../componant/bookTicketcard";

const bookTicket = () => {
  return (
    <div>
      <Stack flexDirection={"row"} justifyContent={"center"} p={2}>
        <Typography variant="h4">Tickets</Typography>
      </Stack>
      <Grid container spacing={2}>
        {cardata.map((card) => (
          <Grid item md={6} spacing={2} xs={12} key={card.TrainNo}>
            <TrainCard
              TrainNo={card.TrainNo}
              TrainName={card.TrainName}
              ArrivalTime={card.ArrivalTime}
              departureTime={card.departureTime}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default bookTicket;
