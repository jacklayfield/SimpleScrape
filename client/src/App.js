import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/pageLayout";
import { Main } from "./pages/main";
import { About } from "./pages/about";
import { Profile } from "./pages/profile";
import { Login } from "./pages/login";
import { SingleScrape } from "./pages/singleScrape";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/single" element={<SingleScrape />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
