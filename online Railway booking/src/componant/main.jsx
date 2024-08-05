import PropTypes from "prop-types";
import Header from "./Navbar";

const LayoutHome = ({ children }) => {
  return (
    <div
      className="logo"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutHome;
