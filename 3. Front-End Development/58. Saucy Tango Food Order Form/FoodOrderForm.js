import React, { useState } from "react";

function FoodOrderForm() {
  /*5*/
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');
  /*9*/
  const handleSubmit = (e) => {
  e.preventDefault();
  /*10*/
  alert(`Order successful! Your order was ${order}. Please show your confirmation number for pickup.`);
};
return (
  /*1/ 2/ 3/ 4/ 6/ 7/ 8/ 11/ 12*/
  <>
  <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input id='name' name="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
  <label htmlFor="phone">Phone:</label>
  <input id='phone' name="phone" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
  <label htmlFor="address">Address:</label>
  <input id='address' name="address" type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
  <label htmlFor="order">Order:</label>
  <input id='order' name="order" type="text" value={order} onChange={(e)=>setOrder(e.target.value)}/>
  <button type="submit">Submit Order</button>
  </form>
  </>
)
}

export default FoodOrderForm;