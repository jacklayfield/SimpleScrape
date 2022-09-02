import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/pageLayout";
import { Main } from "./pages/main";
import { About } from "./pages/about";
import { Profile } from "./pages/profile";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
