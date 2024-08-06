import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import LayoutHome from "./componant/main";
import Register from "./pages/Register/index";
import Ticket from "./pages/Ticket/ticket";
import Ticketbook from "./pages/Ticketbook/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/book-Ticket"
          element={
            <LayoutHome>
              <Ticket />
            </LayoutHome>
          }
        />
        <Route
          path="/Register"
          element={
            <LayoutHome>
              <Register />
            </LayoutHome>
          }
        />
        <Route
          path="/Ticketbook"
          element={
            <LayoutHome>
              <Ticketbook />
            </LayoutHome>
          }
        />
        <Route
          path="/"
          element={
            <LayoutHome>
              <Home />
            </LayoutHome>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
