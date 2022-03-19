import AboutPage from "./pages/aboutPage";
import LandingPage from "./pages/landingpage";
import { Routes, Route } from "react-router-dom";

import DesignFlowContent from "./components/designFlowContent";
import TopNavBar from "./containers/navBar";
import Footer from "./containers/footer";
import Resume from "./containers/resume";


function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url('images/heroBg.svg')` }}>

      </div>
      <div className='blurBg'></div>

      <TopNavBar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/useCase/:id" element={<DesignFlowContent />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
