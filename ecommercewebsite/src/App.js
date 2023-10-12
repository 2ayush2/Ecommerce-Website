import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" />
          <Route path="/shop" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
