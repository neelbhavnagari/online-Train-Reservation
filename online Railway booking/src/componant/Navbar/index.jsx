// import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(240, 240, 240, 0.8)",
        py: 2,
        // position: "absolute",
        width: "100%",
        // zIndex: 1,
      }}
    >
      <header>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 4,
          }}
        >
          <Box>
            <Typography>logo</Typography>
            {/* <img
              src="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD9/Pz//////9u6uf+5enj/woqJ/8KKif/CjIr/r2hm/92/vv/Po6L/2rm4/8ucmv+waWf/48nJ///////+/f3//fz8///////Uraz/sGpo/6NRT/+rX13/sGln/8qbmf/dv7//tnVz/8GJh/+0cG7/z6Sj/+LHxv///////v39//7+/v//////7Nra/+LIx//XsrH/2rm4/+/h4P/Gk5H/4cTD/9Clo//Xs7L/6NTU/8mYlv/x5eT///////7+/v///////v7+///////t3dz/7Nzc//7+/v///////////+/y8f/t8vL/8uXl/+bR0P/27u3///////7+/v////////////////+9goH/xJCP//jy8v///v7/9/T0/9rV1P/Z1dT/8vX1/7Z4dv9/DQn/hhoX/7Nwbv/+/Pz////////////PpKP/m0JA////////////9fb2/+ft7P/5/Pz////////////v5uX/0ayq/9Gnpv+RMC3/0Kel////////////s29s/6BMSf//////9/j4/+DX1//YtbT/1Kuq/+rY2P/u3t7/8+vq//f7+///////4cbF/72CgP///////////8qamf+EFhP/1LKx//z////kzMz/hRcU/6VVU//NoJ//lTc0/+nU1P/w8vL/+/v6//Tq6v/Uraz////////////17ez/ljc0/8uiof//////5c7O/48sKf/iycj/yJiW/4khHf/w4OD/8vX1//Lz8v/48PD/7d7e///////+/v7//////+TU1P/18PD//////+XOzf+NJyT/iB0a/8qbmv+nWFb/6NDQ//f7+//o5uX///////37+//////////////////k5eX/1NHQ//f7+//r2Nj/nkZE/51FQv/TrKv/rmdl/+vX1//4+/v/4d/e///////+/v7//////////////////Pv7/+rp6P/Z19b/4N7d/+7r6v/7+fn//fv7//z5+f//////8fHw/9vZ2f////////////////////////////////////////////Pz8//o5+b/6Ofm//Dv7v/y7u3/8OXl/+zo6P/i4eH///////////////////////////////////////v39//79vb/////////////////plpY/5Q3NP/38fH///////7+/v/////////////////////////////////+/v7/2rq5/9/Cwf/z6en/wIeF/4MUEP/JmZf///////78/P///////////////////////////////////v7///////r29v/HlJP/nENA/44qJ//Bion//v39////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
              alt="no"
              width="100%"
              height="100vh"
            /> */}
          </Box>

          <Box component="nav" sx={{ display: "flex", alignItems: "center" }}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                gap: "30px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              <li>Home</li>
              <li>Login</li>
              <li> Register</li>
            </ul>
            <Button variant="contained" color="primary" sx={{ ml: 2 }}>
              Sign in
            </Button>
          </Box>
        </Box>
      </header>
    </Box>
  );
};

export default Navbar;
