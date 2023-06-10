import React from 'react';
import { CardRow } from './cardRow/CardRow.js';
// Add import statements below
/*4*/
import { useSelector } from 'react-redux';
import { selectBoard } from './boardSlice.js';

export const Board = () => {
  // Add selected data variable and implement below
  /*5*/
  const currentBoard = useSelector(selectBoard);
  /*6*/
  const numberOfCards = currentBoard.length;
  const columns = 3;
  const rows = Math.floor(numberOfCards / columns);

  const getRowCards = (row) => {
    const rowCards = [];
    for (let j = 0; j < columns; j++) {
      const cardIndex = row * columns + j;
      // Implement selected data below
      /*6*/
      rowCards.push(currentBoard[cardIndex]);
    }
    return rowCards;
  };

  let content = [];
  for (let row = 0; row < rows; row++) {
    const rowCards = getRowCards(row);
    content.push(
      <CardRow 
        key={row} 
        cards={rowCards} 
      />
    );
  }
  return <div className="cards-container">{content}</div>;
};



