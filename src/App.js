import React from 'react';
import './App.css';
import BookGallery from './components/BookGallery';
import Bio from './components/Bio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Purple Dino Books</h1>
      </header>
      <main>
        <BookGallery />
        <Bio />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Purple Dino Books. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

