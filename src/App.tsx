import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LagoDelFuerte } from "./pages/LagoDelFuerte";
// import Sierras from "./pages/Sierras";
import ReactGA from "react-ga4";
import { ConocerParaCuidar } from "./pages/ConocerParaCuidar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  ReactGA.initialize("G-Y9EP3P7NJ2");

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<ConocerParaCuidar />} />
        <Route path="/lagodelfuerte" element={<LagoDelFuerte />} />
        {/* <Route path="/sierras" element={<Sierras />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
