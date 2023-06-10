import React from 'react';
// Add import statements below
/*8/ 13/ 18*/
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, flipCard, selectMatchedIDs, resetCards } from '../../boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  /*9/ 14/ 18*/
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    /*14*/
    dispatch(flipCard(id));
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    /*22*/
    dispatch(resetCards());
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  /*10*/
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  /*19*/
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  /*15*/
  if (visibleIDs.length == 2) {
    click = tryAgainHandler;
  }

  if(visibleIDs.length == 2 && !matchedIDs.includes(id)) {
    cardStyle = 'no-match';
  }

  return (
    /*22*/
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};

