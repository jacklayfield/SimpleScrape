import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/pageLayout";
import { Scraper } from "./pages/scraper";
import { About } from "./pages/about";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/scraper" element={<Scraper />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
