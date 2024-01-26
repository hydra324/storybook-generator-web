import React, { useState } from 'react';
import Page from './Page';
import './Book.css';

const Book = () => {
  const [leftPageIndex, setleftPageIndex] = useState(0);

  // Function to handle page turn
  const handleNextPageTurn = () => {
    setleftPageIndex((prevIndex) => prevIndex + 2);
  };

  const handlePreviousPageTurn = () => {
    setleftPageIndex((prevIndex) => prevIndex - 2);
  };

  return (
    <div className="book">
      <div className="page-container">
        <Page pageIndex={leftPageIndex} />
        <Page pageIndex={leftPageIndex + 1} />
      </div>
      <span className='page-buttons'>
        <button onClick={handlePreviousPageTurn}>Previous Page</button>
        <button onClick={handleNextPageTurn}>Next Page</button>
      </span>
    </div>
  );
};

export default Book;