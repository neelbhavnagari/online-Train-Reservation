import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
// import trainsvg from "../../assets/svg/train.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const getLinkStyle = (path) => ({
    textDecoration: location.pathname === path ? "underline" : "none",
    cursor: "pointer",
  });

  return (
    <Box
      sx={{
        backgroundColor: "rgba(240, 240, 240, 0.8)",
        py: 2,
        width: "100%",
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
            <Typography variant="h3">Railways</Typography>
            {/* <img src={trainsvg} alt="" /> */}
          </Box>

          <Box component="nav" sx={{ display: "flex", alignItems: "center" }}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                gap: "30px",
                fontSize: "20px",
                fontWeight: "600",
                margin: 0,
                padding: 0,
              }}
            >
              <li
                style={getLinkStyle("/")}
                onClick={() => handleNavigation("/")}
              >
                Home
              </li>
              <li
                style={getLinkStyle("/login")}
                onClick={() => handleNavigation("/login")}
              >
                Login
              </li>
              <li
                style={getLinkStyle("/register")}
                onClick={() => handleNavigation("/register")}
              >
                Register
              </li>
            </ul>
            {/* <Button variant="contained" color="primary" sx={{ ml: 2 }}>
              Sign in
            </Button> */}
          </Box>
        </Box>
      </header>
    </Box>
  );
};

export default Navbar;
