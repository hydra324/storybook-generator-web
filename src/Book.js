import React, { useState } from 'react';
import Page from './Page';
import './Book.css';
import emptyCanvasIllustration from './assets/undraw_mic_drop_uuyg.svg';
import HTMLFlipBook from 'react-pageflip';

const lastPage = 
  <div className="page">
    <img src={emptyCanvasIllustration} alt="empty canvas illustration" style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
  </div>

const Book = () => {
  const [allPages, setAllPages] = useState(() => [
    lastPage
  ]);

  const createNewpage = () => {
    setAllPages((prevPages) => {
      const newPageIndex = prevPages.length - 1;
      const newPage = <Page pageIndex={newPageIndex} />;
      return [...prevPages.slice(0, -1), newPage, lastPage];
    });
  }

  return (
    <div className='book-container'>
      <HTMLFlipBook width={800} height={1000}> 
          {allPages.map((page, index) => (
            <div key={index} className='page'>
              {page}
            </div>
          ))}
      </HTMLFlipBook>
      <button onClick={createNewpage}>Insert new page</button>  
    </div>
    
  );
};

export default Book;