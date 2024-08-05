// import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Stack,
} from "@mui/material";
// import LoginImg from "../../assets/svg/swap.svg";
// import google from "../../asset/Group 682.svg";
// import facebook from "../../asset/Group 683.svg";
// import apple from "../../asset/Group 684.svg";
// import Airoplan from "../../asset/Air.svg";
import train from "../../assets/img/train.jpg";

const Login = () => {
  return (
    <Box sx={{ display: "flex", gap: "30px", height: "100vh", width: "100%" }}>
      {/* Image box */}
      <Box sx={{ width: "50%" }}>
        <img
          src={train}
          alt="Login"
          style={{ width: "70%", height: "80vh", objectFit: "cover" }}
        />
      </Box>

      {/* Login box */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "30px",
          width: "50%",
        }}
      >
        {/* <img
          src={Airoplan}
          alt=""
          width="350"
          height="180"
          style={{ position: "relative", left: "305px" }}
        /> */}

        <Box sx={{ maxWidth: "450px", width: "100%" }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h2" color="primary" fontWeight={600}>
              Welcome
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Login with email
            </Typography>
          </Box>
          <Box sx={{ width: "100%", "& > :not(style)": { mt: 2 } }}>
            <TextField
              fullWidth
              id="email"
              label="Email Id"
              variant="outlined"
              size="medium"
              autoFocus
            />
            <TextField
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              size="medium"
              type="password"
            />
            <Typography
              sx={{
                mt: 2,
                cursor: "pointer",
                color: "primary.main",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Forget Password
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                size: "large",
              }}
            >
              <Button variant="contained" sx={{ padding: "20px 35px" }}>
                Login
              </Button>
            </Box>
            <Divider>OR</Divider>
            <Box
              sx={{
                display: "flex",
                gap: "25px",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              {/* <img src={google} alt="" />
              <img src={facebook} alt="" />

              <img src={apple} alt="" /> */}
            </Box>
            <Stack
              flexDirection={"row"}
              justifyContent={"center"}
              gap={1}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              m={1}
            >
              <Typography sx={{ fontSize: "20px" }}>
                Dont have accout ?{" "}
              </Typography>
              <Typography sx={{ fontSize: "25px" }}>Register Now</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
