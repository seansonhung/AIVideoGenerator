import { NextResponse } from "next/server";
// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
import { storage } from '../../../../storage';

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_API_KEY
});

export async function POST(req: Request) {
  try {
    const  { text , id } = await req.json();

     // Construct the request
    const request = {
      input: {text: text},
      // Select the language and SSML voice gender (optional)
      voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
      // select the type of audio encoding
      audioConfig: {audioEncoding: 'MP3'},
    };

     // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a file in storage

    const audioBuffer = Buffer.from(response?.audioContent, 'binary');

    const { data, error } = await storage
    .from('ai-short-videos')
    .upload(id + '.mp3', audioBuffer, {
      contentType: 'audio/mpeg',
    });

    //get the public download url
    const downloadUrl = await storage.from('ai-short-videos').getPublicUrl('ouput.mp3');
    return NextResponse.json({'result': downloadUrl});

  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
