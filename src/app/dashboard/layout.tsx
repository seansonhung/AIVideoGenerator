import React from 'react'
import Header from './_components/header'
import SideNav from './_components/sideNav'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div className='hidden md:block h-screen gb-white fixed mt-[65px] w-64'>
        <SideNav />
      </div>
      <div>
        <Header />
        <div className='md: ml-64'>
          {children}
        </div>
      </div>
    </div>
  )
}

