"use client"
import { useUser } from '@clerk/nextjs';
import React, { ReactNode, useEffect } from 'react';
import axios from 'axios';

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
      const response = await axios.post('/api/users/is-new-user', {
        user, // Send the user data in the body
      });
  

      console.log(response.data.message); // Either 'User created successfully' or 'User already exists'
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error handling
        console.error('API Error:', error.response?.data?.error || error.message);
      } else {
        // Generic error handling
        console.error('Unexpected Error:', error);
      }
    }
  };
  
  return (
    <div>
      {children}
    </div>
  );
};

export default Provider;
