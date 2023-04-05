import React from 'react'
import LeadersPage from "./pages/LeadersPage";
import MentorsPage from "./pages/MentorsPage";
import SchoolPage from "./pages/SchoolPage";
import Magazine from "./pages/Magazine";
import NotFound from "./pages/NotFound";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route path="/" element={<LeadersPage />} />
          <Route path="/mentorspage" element={<MentorsPage />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/schoolpage" element={<SchoolPage />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
      </div>
    </div>
  )
}

export default App;
