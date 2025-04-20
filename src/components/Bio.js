import React from 'react';

const Bio = () => {
  return (
    <div className="bio">
        <img src="/images/ManojPolaroidBio.png" alt="Author" className="bio-image" />
        <div className="bio-text">
            <h2>About the Author</h2>
            <p>
        Manoj Kumar lives in Sydney, Australia and fills his days with a kaleidoscope of activities. 
        From the 9-5 routine job to crafting captivating articles and stories, designing books, and doodling delightful randomness, 
        he seamlessly weaves his passions into the fabric of his life. A podcaster, a vlogger, an avid traveler, a sticker creator, and a spontaneous cook who often abandons recipes, 
        Manoj finds joy in contemplating the mysteries of life and taking risks. 
        Nestled with his family, he embraces a life filled with gratitude, adding warmth and authenticity to everything he does.
            </p>
            <p>
            Check out all his activities here:{' '}
        <a 
          href="https://bento.me/emanoj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-link"
        >
          bento.me/emanoj
        </a>.
      </p>
      <p>
        By the way, if you need PDF versions of these books, please find them on <a href="https://ko-fi.com/emanoj/shop" target="_blank" rel="noopener noreferrer"> the author's Ko-fi page </a>.
      </p>

        </div>
    </div>
  );
};

export default Bio;
