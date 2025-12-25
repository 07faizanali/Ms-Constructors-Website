import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ITServices from "./pages/ITSolutionsPage";
import Designing from "./pages/DesigningPage";
import Construction from "./pages/ContructionPage";
import Contact from "./pages/ContactUsPage";
import CompanyOverview from "./pages/about/CompanyOverview";
import CoreValues from "./pages/about/CoreValues";
import VisionMission from "./pages/about/VissionMission";
import Achievements from "./pages/about/Achievements";
import DigitalMarketing from "./components/DigitalMarkiting";
import WebDev from "./components/WebDev";
import "./components/styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* About Us pages */}
        <Route path="/about/company-overview" element={<CompanyOverview />} />
        <Route path="/about/core-values" element={<CoreValues />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/achievements" element={<Achievements />} />

        {/* Services */}
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/designing" element={<Designing />} />
        <Route path="/construction" element={<Construction />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
