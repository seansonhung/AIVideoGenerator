import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function EmptyState() {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed'>
      <h2>You have not create any video yet!</h2>
      <Link href={'/dashboard/create-new'}>
        <Button> + Start Creating One Now</Button>
      </Link>
    </div>
  )
}

