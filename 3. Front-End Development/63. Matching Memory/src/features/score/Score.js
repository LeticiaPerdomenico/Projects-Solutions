import React from 'react';
// Add import statement below
/*20*/
import {useSelector} from 'react-redux';
import {selectMatchedIDs} from '../board/boardSlice';

export const Score = () => {
  // Add selected data variable below
  /*21*/
  const cardsMatched = useSelector(selectMatchedIDs);

  return (
    // implement selected data inside <div>
    /*21*/
    <div className="score-container">Matched: {cardsMatched.length}</div>
  );
};