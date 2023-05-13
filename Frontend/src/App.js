import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Sidebar from "./components/layouts/Sidebar";
import {SidebarContext} from "./components/layouts/Sidebar";
import GenerateTopic from "./pages/GenerateTopic";
import ContentExpansion from "./pages/ContentExpansion";
import FormsReporpusing from "./components/FormsReporpusing";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <SidebarContext.Provider value={{ open, setOpen }}>
            <Header />
            <Sidebar />
            <div className="px-8 py-4 sm:ml-64 min-h-screen">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/topic" element={<GenerateTopic />} />
                <Route path="/expansion" element={<ContentExpansion />} />
                <Route path="/media-content" element={<FormsReporpusing />} />
              </Routes> 
            </div>
        <Footer />
      </SidebarContext.Provider>
   </Router>
  );
}

export default App;
