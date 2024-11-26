import React from 'react'
import Image from 'next/image'

interface SelectStyleProps {
  onUserSelect: (topic: string, value: string) => void;
}

export default function SelectStyle({ onUserSelect }: SelectStyleProps) {
  const options = [
    { 
      name:'Realistic',
      image:'/REALISM.avif'
    },
    {
      name:'Anime',
      image:'/ANIME.avif'
    },
    { 
      name:'Sketch',
      image:'/SKETCH.avif'
    },
    { 
      name:'Illustration',
      image:'/ILLUSTRATION.avif'
    }
  ];
  const [selectedOption, setSelectedOption] = React.useState('');

  return (
    <div className='mt-8'>
      <h2 className='font-bold text-2xl'>Style</h2>
      <p className='text-gray-500'>Select your video style</p>
      <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-3`}>
        {options.map((item, index) => (
          <div key={index} className={`hover:scale-105 transition-all hover:cursor-pointer`}>
            <Image src={item.image} className={`h-48 object-cover rounded-lg w-full ${selectedOption===item.name&&'border-2 border-emerald-500 scale-105'}`}
              alt="style" width={100} height={100}
              onClick={() => {
                setSelectedOption(item.name)
                onUserSelect('style', item.name)
              }}
            >

            </Image>
            <h2 className='text-center'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

