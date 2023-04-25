import React from 'react'
import LeadersPage from "./pages/LeadersPage";
import MentorsPage from "./pages/MentorsPage";
import SchoolPage from "./pages/SchoolPage";
import Magazine from "./pages/Magazine";
import NotFound from "./pages/NotFound";
import { Route, Routes } from 'react-router-dom';
import './styles/App.sass'
function App() {
  return (

    <div className="container">
      <Routes>
        <Route path="/" element={<LeadersPage />} />
        <Route path="/mentorspage" element={<MentorsPage />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/schoolpage" element={<SchoolPage />} />
        <Route path="*" element={<NotFound />} />


      </Routes>
    </div>

  )
}

export default App;
