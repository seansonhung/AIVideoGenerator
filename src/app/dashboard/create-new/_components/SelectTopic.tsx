import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"

interface SelectTopicProps {
  onUserSelect: (topic: string, value: string) => void;
}

export default function SelectTopic({ onUserSelect }: SelectTopicProps) {
  const options = ['Custom Prompt', 'Random AI Story', 'Fun Facts', 'Educational Facts', 'Inspirational Quotes', 'History'];
  const [selectedOption, setSelectedOption] = React.useState('');

  return (
    <div className=''>
      <h2 className='font-bold text-2xl'>Content</h2>
      <p className='text-gray-500'>What is the topic of your content?</p>
      <Select onValueChange={(value) => {
        setSelectedOption(value);
        if (value !== 'Custom Prompt') {
          onUserSelect('topic', value);
        }
      }}>
        <SelectTrigger className="w-full mt-2 p-6 text-md">
          <SelectValue placeholder="Select Content Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((item, index) => (<SelectItem value={item} key={index}>{item}</SelectItem>))}
          </SelectGroup>
        </SelectContent>
      </Select>
      
      {selectedOption === 'Custom Prompt' && (
        <Textarea onChange={(e) => onUserSelect('topic', e.target.value)} className='mt-3' placeholder='Write your Topic Here'/>
      )}
    </div>
  )
}

