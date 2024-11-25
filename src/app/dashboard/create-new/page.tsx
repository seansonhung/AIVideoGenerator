"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';

export default function CreateNew() {

  const[formData, setFormData]=useState([]);
  const onHandleInputChange=(fieldName: string, fieldValue: string)=>{
    setFormData ({...formData, [fieldName]: fieldValue});
    console.log(formData);
  }
  return (
    <div className='md:px-20'>

      <h2 className='font-bold text-4xl text-center'>Create New</h2>

      <div className='mt-10 shadow-md p-10'>
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandleInputChange}></SelectTopic>

        {/* Select Style */}

        <SelectStyle onUserSelect={onHandleInputChange}></SelectStyle>

        {/* Select Duration */}

        <SelectDuration onUserSelect={onHandleInputChange}></SelectDuration>

        {/* Select CreateButton */}
        <Button className='mt-10 w-full'> Create Video</Button>

      </div>


    </div>
  )
}

