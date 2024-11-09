import React from 'react';

const books = [
  {
    title: 'Chester, The Purple Dino: The Fruity City Expedition',
    description: 'A kids picture book!',
    image: '/images/ChesterFruityBookCover_090324.jpg',
  },
  {
    title: 'Sydney Trains and Station Sketches',
    description: 'A collection of 40-odd freehand drawings!',
    image: '/images/SydneyTrainsBookcover_080924.png',
  },
  // Add more books here as needed
];

const BookGallery = () => {
  return (
    <div className="book-gallery">
      <h2>Books Launched!!</h2>
      <div className="books">
        {books.map((book, index) => (
          <div className="book" key={index}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGallery;