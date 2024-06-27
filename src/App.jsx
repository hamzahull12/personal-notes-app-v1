import React from 'react';
import Navigation from './components/header/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePageWrapper from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import DetailNotePageWrapper from './pages/DetailNotePage';
import NotFoundPage from './pages/NotFoundPage';
import ArchivePageWrapper from './pages/ArchivePage';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <Routes>
          <Route path='/*' element={<NotFoundPage/>} />
          <Route path='/' element={<HomePageWrapper />} />
          <Route path='/archives' element={<ArchivePageWrapper />} />
          <Route path='/notes/:id' element={<DetailNotePageWrapper/>} />
          <Route path='/notes/new' element={<AddNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;