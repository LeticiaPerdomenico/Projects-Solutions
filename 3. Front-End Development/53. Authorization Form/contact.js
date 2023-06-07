import React, { useState } from 'react';
/*1*/
function contact() {
  const password = 'swordfish';
  /*3*/
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  };
  /*4/ 5/ 8*/
  const login = (
    <form action="#" onSubmit={handleSubmit}>
  <input type="password" placeholder="Password"/>
  <input type="submit" />
  </form>
  );
  /*6*/
  const contactInfo = (
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
  );
  /*2/ 7*/
  return authorized ? (
        <div id="authorization">
          <h1>contact</h1>
          {contactInfo}
        </div>) : ( <div id="authorization">
          <h1>Enter the Password</h1>
          {login}
        </div>) 
}

export default contact;
