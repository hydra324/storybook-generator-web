import React, { useState } from 'react';
import Page from './Page';
import './Book.css';
import emptyCanvasIllustration from './assets/undraw_mic_drop_uuyg.svg';

const lastPage = 
  <div className="page">
    <img src={emptyCanvasIllustration} alt="empty canvas illustration" />
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
    const newPageIndex = allPages.length;
    setAllPages(prevPages => [...prevPages, <Page pageIndex={newPageIndex} />]);
    setCurrentPage(newPageIndex);
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
        <button onClick={() => setPage(currentPage-1)}>Previous Page</button>
        <button onClick={() => setPage(currentPage+1)}>Next Page</button>
      </span>
      <button onClick={createNewPage}>Insert Page at the end</button>
    </div>
  );
};

export default Book;