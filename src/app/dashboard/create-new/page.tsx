"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';

export default function CreateNew() {

  const [formData, setFormData] = useState<{
    topic?: string; duration?: string, style?: string  
  }>({ topic: '', duration: '', style: '' });
    const onHandleInputChange=(fieldName: string, fieldValue: string)=>{
      setFormData ({...formData, [fieldName]: fieldValue});
      console.log(formData);
    }

  // Get video script from gemini model
  const getVideoScript = async () => {
    const prompt = 'Write a script to generate ' + formData.duration + ' video on topic: '+ formData.topic +' along with AI image prompt in ' + formData.style +' format for each scene and give me result in JSON format with imagePrompt and ContentText as fields';
    const response = await axios.post('/api/gemini/get-video-script', {
      prompt, // Send the user data in the body
    }).then((response) => {
      console.log(response.data);
    })
  }

  const onCreateClickHandler = () => {
    getVideoScript();
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
        <Button className='mt-10 w-full' onClick={onCreateClickHandler}> Create Video</Button>

      </div>


    </div>
  )
}

