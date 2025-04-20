import React from 'react';
import './App.css';
import BookGallery from './components/BookGallery';
import Bio from './components/Bio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/PurpleDinoBooksLogo.png" alt="Purple Dino Books Logo" className="logo" />
      </header>
      <div className="welcome-message">
        <p> Hi, I am Manoj! Welcome and thank you for checking out my books! </p>
        <p>Dive into my world of imagination, inspiration, and adventure! I hope you enjoy exploring these stories as much as I enjoyed bringing them to life!</p>
      </div>
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


