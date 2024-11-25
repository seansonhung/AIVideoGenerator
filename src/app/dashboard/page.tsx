"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

export default function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2>dashboard page</h2>
        <Link href={'/dashboard/create-new'}>
          <Button>+ Create New Video</Button>
        </Link>
      </div>

      {/* Empty State */}
      {videoList?.length === 0 && 
      <div>
        <EmptyState></EmptyState>
      </div>}
    </div>
  )
}

