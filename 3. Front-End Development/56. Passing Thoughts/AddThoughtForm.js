/*4*/
import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
    /*4*/
  const [text, setText] = useState('');
  

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  /*5*/
  const handleSubmit = (event) => {
    event.preventDefault();
    /*8*/
    if (text.length > 0) {
        /*6*/
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };
    props.addThought(thought);
    /*7*/
    setText('');
    };
  };

  return (
    /*4/ 5*/
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}