import React from 'react';

const books = [
  {
    title: 'Chester, The Purple Dino: The Fruity City Expedition',
    description: 'A kids picture book for fruit names!',
    image: '/images/ChesterFruityBookCover_090324.jpg',
    url: 'https://chesterthedino.com',
  },
  {
    title: 'Sydney Trains and Station Sketches',
    description: 'A collection of 40-odd freehand drawings!',
    image: '/images/SydneyTrainsBookcover_080924.png',
    url: 'https://amzn.to/3AmmOp6', /* Amazon ref link*/
  },
  // Add more books here as needed
];

const BookGallery = () => {
    return (
      <div className="book-gallery">
        <h2>Launched books!</h2>
        <div className="books">
          {books.map((book, index) => (
            <div className="book" key={index}>
              <div className="image-container">
                <img src={book.image} alt={book.title} className="book-image" />
              </div>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <a 
              href={book.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="order-link"
            >
              See this book!
            </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default BookGallery;