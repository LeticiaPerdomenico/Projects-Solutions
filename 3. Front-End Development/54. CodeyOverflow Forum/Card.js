import React from 'react';
/*7*/
import Body from './Body';
import Header from './Header';
function Card(props){
  return (
    /*8/ 9/ 10*/
    <>
    <Header profileImg= {props.commentObject.profileImg} username={props.commentObject.username}/>
    <Body comment={props.commentObject.comment}/>
    </>
  )
}
/*11*/
export default Card;