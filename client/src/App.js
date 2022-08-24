import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/pageLayout";
import { Main } from "./pages/main";
import { About } from "./pages/about";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
