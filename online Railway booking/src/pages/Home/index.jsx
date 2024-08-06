import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  IconButton,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSwap = () => {
    setFormData((prevState) => ({
      ...prevState,
      from: prevState.to,
      to: prevState.from,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess("Booking successful!");
    }, 2000);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Container maxWidth="sm">
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            sx={{ bgcolor: "#f5f5f5" }}
            padding={"50px"}
          >
            <Grid item xs={12}>
              <TextField
                label="From"
                name="from"
                value={formData.from}
                onChange={(e) =>
                  setFormData({ ...formData, from: e.target.value })
                }
                fullWidth
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <IconButton onClick={handleSwap} sx={{ mx: 1 }}>
                <SwapHorizIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="To"
                name="to"
                value={formData.to}
                onChange={(e) =>
                  setFormData({ ...formData, to: e.target.value })
                }
                fullWidth
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Passengers"
                type="number"
                name="passengers"
                value={formData.passengers}
                onChange={(e) =>
                  setFormData({ ...formData, passengers: e.target.value })
                }
                InputProps={{ inputProps: { min: 1 } }}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                startIcon={isSubmitting && <CircularProgress size={24} />}
              >
                {isSubmitting ? "Booking..." : "Search"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
