"use client"
import { useUser } from '@clerk/nextjs';
import React, { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;  // Define the children prop
};

const Provider = ({ children }: Props) => {

  const {user} = useUser();

  //only if user is logged in then call the isNewUser function
  useEffect(() => {
    user&&isNewUser()
  }),[user];

  //check if user is new and insert into the database
  const isNewUser = async() =>{
    try {
      const response = await fetch('/api/users/isNewUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }), // Send the user data in the body
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message); // Either 'User created successfully' or 'User already exists'
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.log('Error calling isNewUser API:', error);
    }
  };
  
  return (
    <div>
      {children}
    </div>
  );
};

export default Provider;
