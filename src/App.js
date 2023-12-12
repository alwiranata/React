import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Menu } from "./pages/Menu.js";
import { Contact } from "./pages/Contact.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center", color: "red" }}>
                <div>404</div>
                <div>PAGE NOT FOUND</div>
              </h1>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
