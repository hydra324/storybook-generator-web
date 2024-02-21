import React, { useState } from 'react';
import Page from './Page';
import './Book.css';
import emptyCanvasIllustration from './assets/undraw_mic_drop_uuyg.svg';
import HTMLFlipBook from 'react-pageflip';

const lastPage = 
  <div className="page">
    <img src={emptyCanvasIllustration} alt="empty canvas illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  </div>

const Book = () => {
  const [allPages, setAllPages] = useState(() => [
    <Page pageIndex={0} />,
    <Page pageIndex={1} />,
    <Page pageIndex={2} />,
    <Page pageIndex={3} />,
    lastPage
  ]);

  return (
    <HTMLFlipBook width={300} height={500}>
        {allPages.map((page, index) => (
          <div key={index}>
            {page}
          </div>
        ))}
    </HTMLFlipBook>
  );
};

export default Book;