import React, { useState, useCallback } from 'react';
import Page from './Page';
import './Book.css';
import emptyCanvasIllustration from './assets/undraw_mic_drop_uuyg.svg';

const endingPage = 
  <div className="page">
    <img src={emptyCanvasIllustration} />
  </div>

const Book = () => {
  const [allPages, setAllPages] = useState(() => []);
  const [currentPage, setCurrentPage] = useState(0);

  const setPage = (index) => {
    // code to animate the page flip
    // check whether index is within bounds
    if (index < 0 || index >= allPages.length) return;
    setCurrentPage(index);
  }

  const createNewPage = () => {
    setPage(allPages.length+1);
    setAllPages(prevPages => [...prevPages, <Page pageIndex={prevPages.length} />]);
  };

  return (
    <div className="book">
      <div className="page-container">
        {allPages.map((page, index) => (
            <div key={index} className="page-container-mid" style={{ zIndex: currentPage === index ? 1 : 0 }}>
            {page}
          </div>
        ))}
      </div>
      <span className='page-buttons'>
        <button onClick={() => setPage(currentPage+1)}>Previous Page</button>
        <button onClick={() => setPage(currentPage-1)}>Next Page</button>
      </span>
      <button onClick={createNewPage}>Insert Page at the end</button>
    </div>
  );
};

export default Book;