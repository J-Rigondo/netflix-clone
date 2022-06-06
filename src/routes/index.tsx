import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TvPage from 'pages/TvPage';
import SearchPage from 'pages/SearchPage';
import Header from 'components/layout/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />}>
          <Route path="movies/:id" element={<HomePage />} />
        </Route>
        <Route path="/tv" element={<TvPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
