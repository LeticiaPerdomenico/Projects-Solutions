import React from 'react';
/*4*/
function Header(props){
  return (
    <>
    <img src={props.profileImg} />
    <h1>{props.username}</h1>
    </>
  )
}
/*5*/
export default Header;