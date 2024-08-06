import { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.mobileNo) {
      newErrors.mobileNo = "Mobile Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = "Invalid mobile number";
    }
    if (!formData.dob) newErrors.dob = "Date of Birth is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.indiaspend.com/h-upload/2023/04/15/945591-updated-indian-railways-data-1500.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "20px 30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "600px",
          marginLeft: "10px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} spacing={2} sx={{ display: "flex", gap: "10px" }}>
            <TextField
              label="First Name"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              sx={{ mt: 2, flex: 1 }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              sx={{ mt: 2, flex: 1 }}
            />
          </Grid>
          <Grid item xs={12} spacing={2} sx={{ display: "flex", gap: "10px" }}>
            <TextField
              label="Username"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              sx={{ mt: 2, flex: 1 }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mt: 2, flex: 1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ mt: 2, width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{ mt: 2, width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} spacing={2} sx={{ display: "flex", gap: "10px" }}>
            <TextField
              label="Mobile Number"
              name="mobileNo"
              required
              value={formData.mobileNo}
              onChange={handleChange}
              error={!!errors.mobileNo}
              helperText={errors.mobileNo}
              sx={{ mt: 2, flex: 1 }}
            />
            <TextField
              label="Date of Birth"
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              error={!!errors.dob}
              helperText={errors.dob}
              sx={{ mt: 2, flex: 1 }}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Register;
