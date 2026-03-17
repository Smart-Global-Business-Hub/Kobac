import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProgramDetail from "./components/ProgramDetail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/program/:programId" element={<ProgramDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
