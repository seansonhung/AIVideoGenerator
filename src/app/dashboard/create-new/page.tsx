"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Loader from './_components/Loader';
import { v4 as uuidv4 } from 'uuid';

export default function CreateNew() {

  const [formData, setFormData] = useState<{
    topic?: string; duration?: string, style?: string  
  }>({ topic: '', duration: '', style: '' });
    const onHandleInputChange=(fieldName: string, fieldValue: string)=>{
      setFormData ({...formData, [fieldName]: fieldValue});
      console.log(formData);
    }

  const [loading, setLoading] = useState(false);

  const [videoScript, setVideoStript] = useState([]);

  // Get video script from gemini model
  const getVideoScript = async () => {
    const prompt = 'Write a script to generate ' + formData.duration + ' video on topic: '+ formData.topic +' along with AI image prompt in ' + formData.style +' format for each scene and give me result in JSON format with imagePrompt and ContentText as fields';
    await axios.post('/api/ai/get-video-script', {
      prompt, // Send the user data in the body
    }).then((response) => {
      //get the audio file from the script
      let script = '';
      response.data.result.forEach((scene: any) => {
        script += scene.contentText + ' ';
      });
      getAudioFile(script);
    })
  }

  // Get audio from text script using google text to speech
  const getAudioFile = async (videoScript : string) => {
    const id = uuidv4();
    await axios.post('/api/ai/get-audio', {
      text : videoScript,
      id : id,
    }).then((response) => {
      console.log(response.data);
    });
    
  }

  const onCreateClickHandler = async () => {
    setLoading(true);
    await getVideoScript();
    setLoading(false);
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
        <Loader loading={loading}></Loader>

      </div>


    </div>
  )
}

