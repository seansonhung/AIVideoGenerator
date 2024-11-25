import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectDurationProps {
  onUserSelect: (topic: string, value: string) => void;
}

export default function SelectDuration({ onUserSelect }: SelectDurationProps) {
  const options = ['15 Seconds', '30 Seconds', '60 Seconds'];

  return (
    <div className='mt-7'>
      <h2 className='font-bold text-2xl'>Duration</h2>
      <p className='text-gray-500'>Choose the run time of your video</p>
      <Select onValueChange={(value) => {
        onUserSelect('duration', value);
      }}>
        <SelectTrigger className="w-full mt-2 p-6 text-md">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((item, index) => (<SelectItem value={item} key={index}>{item}</SelectItem>))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

