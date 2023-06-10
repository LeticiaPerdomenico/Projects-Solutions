import React from 'react';
import Comment from './Comment';
export default function CommentList({ comments }) {
  if (!comments) {
    return null;
  }
  return (
    /*10*/
    <ul className='comments-list'>
      {
         comments.map((comment)=>{
         return <Comment comment={comment} />})
      }
    </ul>
  );
}