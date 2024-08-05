import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import LayoutHome from "./componant/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
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
