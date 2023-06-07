import React from 'react';
/*12*/
import Card from './Card';
import {comments} from './commentData'
/*6*/
function app(){
return comments.map(comment => 
  <Card commentObject = {comment} />
)
};
/*13*/
export default app;