import { useState } from 'react'

import '../styles/Person.css'


function Person({ personData, setPersonData }) {
  

   const handleNameChange = (e) => {
    setPersonData({ ...personData, name: e.target.value });
  };
  const handleEmail = (e) => {
    const newPerson = { ...personData, email: e.target.value };
    setPersonData(newPerson);
  };
  const handlePhone = (e) => {
    const newPerson = { ...personData, phone: e.target.value };
    setPersonData(newPerson);
  };



 console.log("during render: ", personData);
  return (
    <>
      <h1>{personData.name}</h1>
      <h2>{personData.email}</h2>
      <h2>{personData.phone}</h2>
      <label htmlFor="name">Full Name: </label>
      <input id="name" type="text" value={personData.name} onChange={handleNameChange} placeholder="John Deere" />
         
     <label htmlFor="email">Email:</label>      
      <input id="email" type="email" value={personData.email} onChange={handleEmail} placeholder="Email" />
      <label htmlFor="phone">Phone:</label>
      <input id="phone" type="tel" value={personData.phone} onChange={handlePhone} placeholder="Phone Number" />

    </>
  );
}

export default Person;