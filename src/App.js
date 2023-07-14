import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Buy from "./Pages/Buy";
import NoMatch from "./Pages/NoMatch";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="books" element={<Books />}></Route>
        <Route path="/books/:buyId" element={<Buy />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
