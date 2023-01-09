import React from 'react';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Author from './pages/authors';
import NewBook from './pages/newBook';
import Book from './pages/book'
import NewAuthor from './pages/newAuhtor';



function App() {
  return (
    <Router>
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Author" element={<Author />} />
        <Route path="/NewBook" element={<NewBook />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/NewAuthor" element={<NewAuthor />} />

      </Routes>
    </div>
    </Router>
  )
}

export default App