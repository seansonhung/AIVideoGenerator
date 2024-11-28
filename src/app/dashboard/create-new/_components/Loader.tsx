
import React from 'react'
import Image from 'next/image'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface LoaderProps {
  loading: boolean;
}

export default function Loader({loading}: LoaderProps) {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogContent className='bg-white'>
            <div className='flex flex-col items-center justify-center'>
              <Image src='/loading.gif' alt='Loading' width={50} height={50} />
              <h2>Creating video in progress...</h2>
            </div>
          </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

